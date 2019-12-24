<?php

use Illuminate\Database\Seeder;

class GenresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        $genres = [['name'=>'Comedy'],['name'=>'Sci-Fi'],['name'=>'Horror'],['name'=>'Romance'],['name'=>'Thriller'],['name'=>'Mystery'],['name'=>'Adventure'],['name'=>'Action'],['name'=>'Drama'],['name'=>'Fantasy'],['name'=>'Animation'],['name'=>'Crime'],['name'=>'Superhero']];
        \App\Genre::insert($genres);
    }
}
