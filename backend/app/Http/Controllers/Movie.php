<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Movie extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \App\Movie::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $movie = new \App\Movie;
            $movie->name= $request['name'];
            $movie->length = $request['length'];
            $movie->img = $request['img'];
            $movie->save();
            $movie->genres()->attach($request['genres']);
        } catch (\Throwable $th) {
            error_log($th);
        }
    }
    public function screening(Request $request){
        try {
            $movie = \App\Movie::find($request['movieID']);
            $movie->screens()->attach([$request['screenID']=>['date'=>$request['screenDate'],'time'=>$request['screenTime']]]);
        } catch (\Throwable $th) {
            error_log($th);
        }
        return $movie;
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $movie = \App\Movie::find($id);
            $movie_genres = $movie->genres;
            $movie_screens = $movie->screens;
        } catch (\Throwable $th) {
            error_log($th);
        }
        $movie = [
            'movie'=>$movie,
            'genres'=>$movie_genres,
            'screens'=>$movie_screens
        ];
        return $movie;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return \App\Movie::find($id);
    }
}
