<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Message;

class MessageController extends Controller
{
    public function sendMessageToAnotherUser(Request $req){
        $user = auth::user();
        try{
            $user->id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        try{
            $message = Message::create([
                'sender_id' => $user->id,
                'receiver_id' => $req->receiver_id,
                'body' => $req->message_text,
                'status' => 'active'
            ]);
            return response()->json([
                'status'=>'sent'
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'status'=>''.$e
            ]);
        }
        
    }
    public function getMessagesBetweenTwoUsers(){
        $user = auth::user();
        try{
            $user->id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        $messages = Message::where('sender_id',$user->id)->orWhere('receiver_id',$user->id)->where('status','active')->get();
        return response()->json([
            'messages'=>$messages
        ]);
    }

    public function getMessagesBetweenUserAndAdmin(Request $req){
        $user = auth::user();
        try{
            $user->id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        $messages = Message::where('status', 'active')
        ->where('sender_id', $user->id)
        ->where('receiver_id', $req->admin_id) 
        ->orWhere('sender_id', $req->admin_id)
        ->where('receiver_id', $user->id)
        ->get();
        return response()->json([
            'messages'=>$messages
        ]);
    }

    public function deleteConverstationBetweenTwoUsers(){
        $user = auth::user();
        try{
            $user->id !=null;
        }catch(\Exception $e){
            return response()->json([
                'message'=>'unauthorized'
            ]);
        }
        $delete_conversation = Message::where('sender_id',$user->id)->orWhere('receiver_id',$user->id)
        ->update(['status'=>'inactive']);
    }
}
