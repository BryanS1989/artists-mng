<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artists', function (Blueprint $table) {
            $table->id();

            $table->string('picture', 255)
                    ->nullable()
                    ->default(null);

            $table->string('code', 50)
                    ->nullable(false)
                    ->unique();   // for Social Media username

            $table->string('name', 50)
                    ->nullable(false);

            $table->string('surname', 100)
                    ->nullable()
                    ->default(null);

            $table->string('country', 2)    // Country Codes ISO-3166
                    ->nullable(false)
                    ->default('ES');

            $table->string('email', 100)
                    ->nullable();

            $table->string('prefix', 5)
                    ->nullable();

            $table->string('phone', 20)
                    ->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artists');
    }
};
