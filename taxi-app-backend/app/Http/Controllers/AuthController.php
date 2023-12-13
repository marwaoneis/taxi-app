<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Validation\Rule as ValidationRule;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $response = [
            'id'=>$user->id,
            'first_name'=>$user->first_name,
            'last_name'=>$user->last_name,
            'email'=>$user->email,
            'user_type_id'=>$user->user_type_id,
            'phone_number'=>$user->phone_number,
            'profile_picture'=>$user->profile_picture
        ];
        return response()->json([
                'status' => 'success',
                'user' => $response,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request){
        $request->validate([
           
            'user_type_id'=> [
                'required',
                ValidationRule::in([2, 3]),
            ],
          
        ]);
        // if($request->user_type_id==1){
        //     $user = User::create([
        //         'first_name' => $request->first_name,
        //         'last_name' => $request->last_name,
        //         'email' => $request->email,
        //         'user_type_id'=>$request->user_type_id,
        //         'phone_number'=>$request->phone_number,
        //         'password' => Hash::make($request->password),
        //     ]);

        // }
        // 2 is passenger
        if($request->user_type_id==2){
            $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'phone_number'=>'required|string',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
              
            ]);
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'user_type_id'=>$request->user_type_id,
                'phone_number'=>$request->phone_number,
                'password' => Hash::make($request->password),
            ]);

        }
        // 3 is driver
        else if($request->user_type_id==3){
            $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
                'phone_number'=>'required|string',
                'profile_picture'=>'required',
                'driving_license'=>'required'
            ]);
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone_number'=>$request->phone_number,
                'user_type_id'=>$request->user_type_id,
                'profile_picture'=>$request->profile_picture,
                'driving_license'=>$request->driving_license,
                'password' => Hash::make($request->password),
                'status' => 'pending'
            ]);
        }
        $token = Auth::login($user);
        $response = [
            'id'=>$user->id,
            'first_name'=>$user->first_name,
            'last_name'=>$user->last_name,
            'email'=>$user->email,
            'phone_number'=>$user->phone_number,
            'profile_picture'=>$user->profile_picture,
            'user_type_id'=>$user->user_type_id
        ];
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $response,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}
