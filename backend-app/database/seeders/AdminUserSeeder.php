<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ADMIN_INFO = [
            'name' => env('ADMIN_INFO_NAME'),
            'email' => env('ADMIN_INFO_EMAIL'),
            'password' => env('ADMIN_INFO_PWD'),
        ];

        $adminUser = User::where('email', $ADMIN_INFO['email'])->first();

        if (!$adminUser) {
            $adminUser = new User();

            $adminUser->name = $ADMIN_INFO['name'];
            $adminUser->email = $ADMIN_INFO['email'];
            $adminUser->password = Hash::make($ADMIN_INFO['password']);

            $adminUser->save();
        } else {
            $adminUser->name = $ADMIN_INFO['name'];
            $adminUser->email = $ADMIN_INFO['email'];
            $adminUser->password = Hash::make($ADMIN_INFO['password']);

            $adminUser->save();
        }
    }
}
