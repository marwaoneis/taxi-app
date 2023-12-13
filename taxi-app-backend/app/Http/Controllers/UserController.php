<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    // Get all accepted drivers info
    public function getAcceptedDrivers(){
        $user = Auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if ($user->user_type_id == 1) {
                $drivers = User::where('user_type_id', 3)->where('status', '=','accepted')->get();
            }
            return response()->json(['accepted_drivers_info'=>$drivers]);
        }catch(\Exception $e){
            response()->json(['error'=>$e]);
        }
        
    }

    // Get all pending drivers info
    public function getPendingDrivers(){
        $user = Auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if ($user->user_type_id == 1) {
                $drivers = User::where('user_type_id', 3)->where('status', 'pending')->get();
            }
            return response()->json(['pending_drivers_info'=>$drivers]);
        }catch(\Exception $e){
            response()->json(['error'->$e]);
        }
        
    }
    
    public function getPendingDriversCount(){
        $user = Auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if ($user->user_type_id == 1) {
                $drivers_count = User::where('user_type_id', 3)->where('status', 'pending')->count();
            }
            return response()->json(['pending_drivers_count'=>$drivers_count]);
        }catch(\Exception $e){
            response()->json(['error'->$e]);
        }
        
    }

    public function acceptPendingDriver(Request $req){
        $user = Auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if ($user->user_type_id == 1) {
                $driver = User::findOrFail($req->id);
                if($driver->user_type_id == 3 && $driver->status == "pending"){
                    $driver->update(['status'=>'accepted']);
                    return response()->json(['message'=>'driver request is accepted!']);
                }else{
                    return response()->json(['message'=>'driver already accepted']);
                }
            }
        }catch(\Exception $e){
            response()->json(['error'->$e]);
        }
        
    }

    public function rejectPendingDriver(Request $req){
        $user = Auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if ($user->user_type_id == 1) {
                $driver = User::findOrFail($req->id);
                if($driver->user_type_id == 3 && $driver->status == "pending"){
                    $driver->update(['status'=>'rejected']);
                    return response()->json(['driver_status'=>'driver request is rejected!']);
                }else{
                    return response()->json(['message'=>'driver request already rejected']);
                }
            }
        }catch(\Exception $e){
            response()->json(['error'->$e]);
        }
        
    }

    public function removeAcceptedDriver(Request $req){
        $user = Auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if ($user->user_type_id == 1) {
                $driver = User::findOrFail($req->id);
                if($driver->user_type_id == 3 && $driver->status == "accepted"){
                    $driver->update(['status'=>'removed']);
                    return response()->json(['message'=>'driver is removed!']);
                }else{
                    return response()->json(['message'=>'driver already removed']);
                }
            }
        }catch(\Exception $e){
            response()->json(['error'->$e]);
        }
        
    }

    public function getAllPassengers(){
        $user = auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        if($user->user_type_id == 1){
            try{
                $passengers = User::where('user_type_id',2)->get();
                return response()->json([
                    'passengers'=>$passengers
                ]);
            }
            catch(\Exception $e){
                return response()->json([
                    'message' => ''.$e
                ]);
            }
           
        }else{
            return reponse()->json([
                'message'=>'unauthorized'
            ]);
        }
    }

    public function getUserInfo(){
        $user = auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        $user_info = User::where('id',$user->id)->first();
        $response = [
            "id"=>$user->id,
            "first_name"=>$user_info->first_name,
            'last_name'=>$user_info->last_name,
            'email'=>$user_info->email,
            'profile_picture'=>$user_info->profile_picture
        ];
        return response()->json([
            'status' => 'success',
            'user'=>$response
        ]);
    }

    public function updatePassengerPicture(Request $req){
        $user = auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if($user->user_type_id == 2 ){
                $passenger = User::findOrFail($user->id);
                $passenger->update(['profile_picture'=>$req->profile_picture]);
                return response()->json([
                    'status' => 'success',
                    'message' => 'profile updated successfully',
                ]);
            }
            else{
                return response()->json([
                    'status' => 'failed',
                    'message' => 'unauthorized',
                ]);
            }    
        } catch(\Exception $e){
            return response()->json([
                'message'=>''.$e
            ]);
        }
        
    }

    public function updateDriverPicture(Request $req){
        $user = auth::user();
        try{
            $user->user_id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            if($user->user_type_id == 3 ){
                $passenger = User::findOrFail($user->id);
                $passenger->update(['profile_picture'=>$req->profile_picture]);
                return response()->json([
                    'status' => 'success',
                    'message' => 'profile updated successfully',
                ]);
            }
            else{
                return response()->json([
                    'status' => 'failed',
                    'message' => 'unauthorized',
                ]);
            }    
        } catch(\Exception $e){
            return response()->json([
                'message'=>''.$e
            ]);
        }
        
    }
}
