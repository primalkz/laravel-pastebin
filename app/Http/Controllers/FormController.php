<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


use App\Models\Paste;

class FormController extends Controller
{
    // FormController starts
    function Paste(Request $req) {
        $req->validate([
            'text' => 'required|string|max:8000',
        ]);

        // Validate the input data
        // $validator = Validator::make($req->all(), [
        //     'text' => 'required|string|max:500',
        // ]);

        // if ($validator->fails()) {
        //     return response()->json([
        //         'errors' => $validator->errors(),
        //     ], 422);
        // }

        $newPaste = new Paste();
        $newPaste->url = (string) Str::uuid();
        $newPaste->text = $req->text;
        if($newPaste->save()){
            return response()->json([
                'message' => "Pasted! here is your link",
                'link' => url("/paste/" . $newPaste->url),
                'data' => $req->all(),
            ], 200);
        }
        
    }
    // FormController Ends
}
