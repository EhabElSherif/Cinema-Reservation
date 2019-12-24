<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    // Table name
    protected $table = 'tickets';
    // Primary key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = false;

    public function customer(){
        return $this->belongsTo('App\Customer');
    }

    public function screening(){
        return $this->belongsTo('App\Screening');
    }
}
