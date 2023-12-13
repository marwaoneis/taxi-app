<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        DB::table('user_types')->insert([
            'id' => 1,
            'user_type' => "Admin",
           
      ]);
        DB::table('user_types')->insert(
        [
            'id' => 2,
            'user_type' => "Passenger",
           
        ]
       );
        DB::table('user_types')->insert(
      
        [
            'id' => 3,
            'user_type' => "Driver",
           
        ]);
        
    }
}
