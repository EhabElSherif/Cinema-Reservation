<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Screening extends Model
{
    // Table name
    protected $table = 'movies_screens';
    // Primary key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = false;

    public function tickets(){
        return $this->hasMany('App\Ticket');
    }
}