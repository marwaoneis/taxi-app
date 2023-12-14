<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
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
        return response()->json([
                'status' => 'success',
                'user' => $user,
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
                // 
            ],
          
        ]);
        $path = storage_path('images/');

        // dd($path);
        // !is_dir($path) &&
        //     mkdir($path, 0777, true);

        // if($file = $request->file('profile_picture')) {
        //     $fileData = $this->uploads($file,$path);
        //     // Image::create([
        //     //     'name' => $fileData['fileName'],
        //     //     'type' => $fileData['fileType'],
        //     //     'path' => $fileData['filePath'],
        //     //     'size' => $fileData['fileSize']
        //     // ]);
        // }
        // 2 is passenger
        if($request->user_type_id==2){
            $request->validate([
                'profile_picture' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
              
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
              
            ]);
            // dd($request->file('profile_picture')->store('images', 'public'));
            
            $user = User::create([
           
           
           
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'user_type_id'=>$request->user_type_id,
                'profile_picture'=>'http://127.0.0.1:8000/storage/images/'.$request->file('profile_picture')->store('images', 'public'),

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
                'profile_picture' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',

                'license'=>'required'
            ]);
            $user = User::create([
           
           
           
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'user_type_id'=>$request->user_type_id,
                'profile_picture'=>$request->profile_picture,
                'license'=>$request->license,
                'profile_picture'=>'http://127.0.0.1:8000/storage/images/'.$request->file('profile_picture')->store('images', 'public').'',
                'password' => Hash::make($request->password),
            ]);
    
        }
       

     
        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
    public function uploads($file, $path)
    {
        if($file) {
            $fileName   = time() . $file->getClientOriginalName();
            Storage::disk('storage')->put($path . $fileName, File::get($file));
            $file_name  = $file->getClientOriginalName();
            $file_type  = $file->getClientOriginalExtension();
            $filePath   = $path . $fileName;

            return $file = [
                'fileName' => $file_name,
                'fileType' => $file_type,
                'filePath' => $filePath,
                'fileSize' => $this->fileSize($file)
            ];
        }
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
