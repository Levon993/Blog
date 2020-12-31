<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [   'id' => 1,
                'name' => 'admin'
            ],
            [   'id' => 2,
                'name' => 'user'
            ]

        ];

        \Illuminate\Support\Facades\DB::table('roles')->insert($data);
    }
}
