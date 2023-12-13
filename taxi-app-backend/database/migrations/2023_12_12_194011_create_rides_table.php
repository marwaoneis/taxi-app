<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('passenger_id');
            $table->unsignedBigInteger('driver_id');
            $table->string('start_location');
            $table->string('destination');
            $table->integer('rating_by_passenger')->nullable();
            $table->string('feedback_by_passenger')->nullable();
            $table->integer('rating_by_driver')->nullable();
            $table->string('feedback_by_driver')->nullable();
            $table->string('status')->default('pending');
            $table->integer('price')->default(10);
            $table->foreign('passenger_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('driver_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};
