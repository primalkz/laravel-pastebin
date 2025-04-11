<?php

use Illuminate\Support\Facades\Route;

// import Controllers
use App\Http\Controllers\FormController;
use App\Http\Controllers\PasteController;


Route::get('/{any}', function () {
    return view('welcome'); // or whatever blade file loads your React app
})->where('any', '.*');

// pastebin submit end point
Route::post('/paste', [FormController::class, 'Paste'])->name('paste.submit');
// get point to fetch paste info
Route::post('/paste/{id}', [PasteController::class, 'fetchPaste'])->name('paste.fetch');