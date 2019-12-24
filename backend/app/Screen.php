<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Screen extends Model
{
    // Table name
    protected $table = 'screens';
    // Primary key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = false;

    public function movies(){
        return $this->belongsToMany('App\Movie','movies_screens','screen_id','movie_id')->withPivot('id','date','time');;
    }
}
