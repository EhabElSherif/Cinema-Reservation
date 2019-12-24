<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    // Table name
    protected $table = 'genres';
    // Primary key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = false;

    public function movies(){
        return $this->belongsToMany('App\Movie','movies_genres','genre_id','movie_id');
    }
}
