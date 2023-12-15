<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RideController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function pending_rides(Request $req)
    {
        $user = Auth::user();

        // dd($user);
        if ($user->user_type_id == 3) {
            $results = DB::table('rides')
                ->join('users', 'rides.passenger_id', '=', 'users.id')
                // ->join('rides', 'rides.driver_id', '=', 'users.id')
                ->where('rides.status', '=', 'pending')


                ->select('rides.*')
                // ->orderBy('rides.created_at')
                ->get();


            return response()->json([
                "success" => true,
                "rides" => $results
            ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }

    public function request_ride(Request $req)
    {
        $user = Auth::user();
        if ($user->user_type_id == 2) {
            $validatedData = $req->validate([
                'start_location' => 'required',
                'destination' => 'required',




            ]);


            // dd($user);
            $ride = new Ride;
            $ride->destination    =   $validatedData['destination'];
            $ride->start_location =    $validatedData['start_location'];


            $ride->passenger_id  = $user->id;
            $ride->save();
            $ride->destination    =   json_decode($validatedData['destination']);
            $ride->start_location =   json_decode($validatedData['start_location']);
            $ride->passenger_id  = '';

            // $getride =   DB::table('rides')
            // ->join('users', 'rides.passenger_id', '=', 'users.id')
            // ->join('users', 'rides.driver_id', '=', 'users.id')
            // ->where('rides.id', $ride->id)

            // ->select('rides.*')->first()
            $getride = Ride::find($ride->id);
            return
                response()->json([
                    "Success" => true,
                    "message" => "Ride Requested",
                    "ride" =>  $getride

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }


    public function accept_ride(Request $req)
    {
        $user = Auth::user();
        if ($user->user_type_id == 3) {
            $validatedData = $req->validate([
                'ride_id' => 'required',


            ]);


            $ride = Ride::find($validatedData['ride_id']);

            $ride->status = 'accepted';
            $ride->driver_id = $user->id;
            $ride->save();
            return
                response()->json([
                    "Success" => true,
                    "message" => "Ride Accepted"

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }



    public function start_ride(Request $req)
    {
        $user = Auth::user();
        if ($user->user_type_id == 3) {
            $validatedData = $req->validate([
                'ride_id' => 'required',


            ]);


            $ride = Ride::find($validatedData['ride_id']);

            $ride->status = 'ongoing';

            $ride->save();
            return
                response()->json([
                    "Success" => true,
                    "message" => "Ride started"

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }

    public function end_ride(Request $req)
    {
        $user = Auth::user();
        if ($user->user_type_id == 3) {
            $validatedData = $req->validate([
                'ride_id' => 'required',


            ]);


            $ride = Ride::find($validatedData['ride_id']);

            $ride->status = 'completed';

            $ride->save();
            return
                response()->json([
                    "Success" => true,
                    "message" => "Ride Completed"

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }




    public function get_ride(Request $req, $id)
    {
        $user = Auth::user();
        if ($user->user_type_id == 2) {



            // dd($user);


            $getride =   DB::table('rides')
                ->join('users as p', 'rides.passenger_id', '=', 'p.id')
                ->join('users as d', 'rides.driver_id', '=', 'd.id')
                ->where('rides.id', $id)

                ->select(
                    'p.first_name as p_first_name',
                    'p.last_name as p_last_name',
                    'rides.id',
                    'rides.driver_id',
                    'rides.destination',
                    'rides.price',
                    'rides.start_location',
                    'rides.status'
                )->first();
            $getride->start_location = json_decode($getride->start_location);
            $getride->destination = json_decode($getride->destination);
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "ride" =>  $getride

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }
    public function get_rides(Request $req)
    {
        $user = Auth::user();
        // if ($user->user_type_id == 3) {



            // dd($user);


            $getrides =   DB::table('rides')
                ->join('users as p', 'rides.passenger_id', '=', 'p.id')
                ->join('users as d', 'rides.driver_id', '=', 'd.id')
               

                ->select(
                    'p.first_name as p_first_name',
                    'p.last_name as p_last_name',
                    'rides.id',
                    'rides.driver_id',
                    // json_decode( 'rides.destination'),
                    'rides.price',
                    // json_decode('rides.start_location'),
                    'rides.status'
                )->get();
            // $getride->start_location = json_decode($getride->start_location);
            // $getride->destination = json_decode($getride->destination);
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "ride" =>  $getrides

                ], 200);
        // } else {
        //     return response()->json([
        //         "success" => false,
        //         "message" => "Not Authorized",
        //     ], 200);
        // }
    }

    public function get_total_money()
    {
        $user = Auth::user();
        if ($user->user_type_id == 1) {



            dd($user);


            $result = DB::table('rides')
                ->select(DB::raw('SUM(price) as total'))
                ->first();
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "rides" =>  $result

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }

    public function get_active_rides_total()
    {
        $user = Auth::user();
        if ($user->user_type_id == 1) {



            // dd($user);


            $result = DB::table('rides')
                ->select(DB::raw('SUM(1) as total'))->where('status','=','accepted')
                ->orWhere('status','=','ongoing')
                ->first();
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "rides" =>  $result

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }


    public function get_avg_drivers()
    {
        $user = Auth::user();
        if ($user->user_type_id == 1) {



            // dd($user);

            $result=Ride::select(DB::raw('AVG(rating_by_passenger) as total'))->whereNotNull('rating_by_passenger')->get();

          
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "rides" =>  $result

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }




    public function get_completed_rides_total()
    {
        $user = Auth::user();
        // if ($user->user_type_id == 1) {



            // dd($user);


            $result = DB::table('rides')
                ->select(DB::raw('count(id) as total'))->where('status','=','completed')
                ->first();
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "rides" =>  $result

                ], 200);
        // } else {
        //     return response()->json([
        //         "success" => false,
        //         "message" => "Not Authorized",
        //     ], 200);
        // }
    }


    public function get_todays_rides_total()
    {
        $user = Auth::user();
        if ($user->user_type_id == 1) {



            // dd($user);

            $today=date('Y-m-d');
  
            $result = DB::table('rides')
                ->select(DB::raw('count(id) as total'))
                ->where('created_at', '>', $today)
                ->first();
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "rides" =>  $result

                ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Not Authorized",
            ], 200);
        }
    }






    public function get_average_drivers()
    {
        $user = Auth::user();
        // if ($user->user_type_id == 1) {



            // dd($user);

            $today=date('Y-m-d');
  
            $result = Ride::select('driver_id',DB::raw('avg(rating_by_passenger) as total'))->whereNotNull('rating_by_passenger')
            ->whereNotNull('driver_id')
                // ->where('created_at', '>', $today)
                ->groupBy('driver_id')->get();
            return
                response()->json([
                    "Success" => true,
                    // "message" => "Ride Requested",
                    "rides" =>  $result

                ], 200);
        // } else {
        //     return response()->json([
        //         "success" => false,
        //         "message" => "Not Authorized",
        //     ], 200);
        // }
    }

}
