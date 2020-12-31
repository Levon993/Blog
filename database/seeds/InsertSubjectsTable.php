<?php

use Illuminate\Database\Seeder;

class InsertSubjectsTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $data = [
          [
              'id' =>1,
              'name' => 'Politics'
          ],
            [
              'id' =>2,
              'name' => 'Art'
            ],
           [
              'id' =>3,
              'name' => 'Sport'
            ],
           [
              'id' =>4,
              'name' => 'Beautiful'
            ],
           [
              'id' =>5,
              'name' => 'Philosophy'
            ],
           [
           'id' =>6,
           'name' => 'Tourism'
           ],
           [
           'id' =>7,
           'name' => 'Countries'
           ],
           [
           'id' =>8,
           'name' => 'Cities'
           ],
           [
           'id' =>9,
           'name' => 'everyday life'
           ],
       ];
       \Illuminate\Support\Facades\DB::table('subjects')->insert($data);
    }
}
