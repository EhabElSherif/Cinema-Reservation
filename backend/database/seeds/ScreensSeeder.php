<?php

use Illuminate\Database\Seeder;

class ScreensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $screens = [['id'=>'1'],['id'=>'2'],['id'=>'3'],['id'=>'4'],['id'=>'5'],['id'=>'6'],['id'=>'7'],['id'=>'8']];
        \App\Screen::insert($screens);
    }
}
