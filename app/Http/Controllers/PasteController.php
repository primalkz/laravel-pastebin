<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paste;

class PasteController extends Controller
{
    // fetchPaste
    function fetchPaste($id) {
        $paste = Paste::where('url', $id)->first();

        if (!$paste) {
            return response()->json([
                'message' => 'Paste not found!',
                'data' => null,
            ], 404);
        }

        return response()->json([
            'message' => 'Paste fetched successfully!',
            'data' => [
                'url' => $paste->url,
                'text' => $paste->text,
                'created_at' => $paste->created_at,
                'updated_at' => $paste->updated_at,
            ],
        ], 200);
    }
}
