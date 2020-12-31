<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class CreateAdminSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'DevAlexanyan';
        $user->email = 'levon.aleksanyan.93@mail.ru';
        $user->password =Hash::make('123456789');
        $user->save();
        $user->roles()->attach(1);
        $user->createToken('authToken')->accessToken;
    }
}
