<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ride>
 */
class RideFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $passenger=fake()->numberBetween(101,114);
        $driver=fake()->numberBetween(101,114);

        return [
            //
            // 'passenger_id' => fake()->firstName(),
            // 'driver_id' => fake()->lastName(),
            // 'email' => fake()->unique()->safeEmail(),
            // // 'phone' => fake()->creditCardNumber(),
            // 'user_type_id' => $type,
            // 'status'=>$status,
            // 'password' => $password ??= Hash::make('password'),
            // 'profile_picture'=>fake()->imageUrl($width=400, $height=400,$category="product") 
        ];
    }
}
