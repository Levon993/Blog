<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Logs\LogsRepository;

class LogsController extends Controller
{

    protected $LogInstance;
    public function __construct(LogsRepository $repo)
    {
        $this->LogInstance  = $repo;
    }

    public function index(){
       $logs =  $this->LogInstance->index();

       return $logs;
    }
}
