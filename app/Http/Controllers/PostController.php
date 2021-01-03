<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Posts\PostRepository;

class PostController extends Controller
{
    protected $postRepo;
    public function __construct(PostRepository $repo)
    {
        $this->postRepo = $repo;
    }

    public function index(Request $request){
        $posts = $this->postRepo->index($request);

        return  $posts;
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
