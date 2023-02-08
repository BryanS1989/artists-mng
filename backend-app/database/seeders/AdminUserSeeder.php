<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

const ADMIN_INFO = [
    'name' => 'Admin',
    'email' => 'admin@artists.mng',
    'password' => 'AdminArtists2023*',
];
class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminUser = User::where('email', 'admin@artists.mng')->first();

        if (!$adminUser) {
            $adminUser->name = ADMIN_INFO['name'];
            $adminUser->email = ADMIN_INFO['email'];;
            $adminUser->password = Hash::make(ADMIN_INFO['password']);

            $adminUser->save();
        } else {
            $adminUser->password = Hash::make(ADMIN_INFO['password']);

            $adminUser->save();
        }
    }
}
