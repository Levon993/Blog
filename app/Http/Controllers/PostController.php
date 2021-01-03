<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Posts\PostRepository;
use App\Repositories\Logs\LogsRepository;
use mysql_xdevapi\Exception;

class PostController extends Controller
{
    protected $postRepo;

    protected $logInstance;
    public function __construct(PostRepository $repo, LogsRepository $log)
    {
        $this->postRepo = $repo;
        $this->logInstance = $log;
    }

    public function index(Request $request){
        try {


            $posts = $this->postRepo->index($request);

            return $posts;
        }catch (\Exception $exception){
            $this->logInstance->create($exception);
        }
    }

    public function Create(Request $request){
//        return response()->json($request->all());
        $info = $this->postRepo->create($request);
        return response()->json($info);
    }

    public function getSubjects(){
        $subjects = $this->postRepo->getPostSubjests();
        return $subjects;
    }
    public function like(Request $request){
      $result = $this->postRepo->postLikePost($request);
        return response()->json($result);

    }
    public function LikeCount(Request $request){
        $count = $this->postRepo->LikeCount($request);
        return $count;
    }

}
