<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SearchController extends Controller
{
    private $baseUrl= 'https://api.unsplash.com';
    private $key= 'btdIQnBhRks7RmkZmZ9WQxzU_klAerM62u_yKfQprMg';

    public function search(Request $request)
    {
        $query= $request->query;
        $queryValue = $query->get('value_field_name');
        // dd($query);

        $response= Http::get($this->baseUrl.'/search/photos?client_id='.$this->key.'&query='.$queryValue);

        return $response;
    }
}
