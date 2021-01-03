<?php


namespace App\Repositories\Posts;
use App\Repositories\CoreRepository;
use App\Models\Post as Model;
use App\Repositories\ResourcesInterface;
use App\Models\Subject;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Like;
use phpDocumentor\Reflection\Types\This;
use App\User;
use App\Repositories\Logs\LogsRepository;
class PostRepository extends CoreRepository implements ResourcesInterface
{




    public function index(Request $request)
    {
        try {

            $posts = $this->startConditions()->with(['subject', 'likes']);
            $post = $posts->orderBy('created_at', 'desc')->paginate(7);

            return response()->json($post);
        }catch (\Throwable $exception){

            $log = new LogsRepository();
            $log->create($exception);


            return response()->json(['success'=>false]);
        }
    }
    public function LikeCount(Request $request){
        try {


            $Likes = $this->startConditions()->with('likes')->where('id', $request->id)->count();
            return \response()->json($Likes);
        }catch (\Throwable $exception){
            $log = new LogsRepository();
            $log->create($exception);


            return response()->json(['success'=>false]);
        }
    }


    protected function getModelClass()
    {
        return Model::class;
    }


    public function getPostSubjests(){
        try {

            $subjects = Subject::all();
            return response()->json($subjects);
        }catch (\Throwable $exception){
            $log = new LogsRepository();
            $log->create($exception);


            return response()->json(['success'=>false]);
        }
    }

    public function create(Request $request)
    {
        try {


            $file = $request->file('image');

            if (!$request->hasFile('image')) {
                return response()->json(['image not found']);
            }

//        $file = $request->file('image');
            if (!$file->isValid()) {
                return response()->json(['invalid file upload']);
            }
            $path = public_path() . '/storage/images';

            $file->move($path, $file->getClientOriginalName());
            $storagePhat = Storage::url('app/public/images/' . $file->getClientOriginalName());
            $post = $this->startConditions();
            $post->title = $request->title;
            $post->image = $file->getClientOriginalName() ? $file->getClientOriginalName() : 'empty';
            $post->description = $request->description;
            $post->user_id = $request->userId;
            $post->save();
            $post->subject()->attach([$post->id, $request->subject]);

            return response()->json($path);
        }catch (\Throwable $exception){
            $log = new LogsRepository();
            $log->create($exception);
            return response()->json(['success'=>false]);
        }
    }

    public function postLikePost(Request $request)
    {
        try {


            $post_id = $request->postId;
            $is_like = $request->isLike === 'true';
            $update = false;
            $post = $this->startConditions()->find($post_id);
            if (!$post) {
                return null;
            }
            $user = User::where('id', $request->userId)->first();
            $like = $user->likes()->where('post_id', $post_id)->first();
            if ($like) {
                $already_like = $like->like;
                $update = true;
                if ($already_like == $is_like) {
                    $like->delete();
                    return null;
                }
            } else {
                $like = new Like();
            }
            $like->like = $is_like;
            $like->user_id = $user->id;
            $like->post_id = $post->id;
            if ($update) {
                $like->update();
            } else {
                $like->save();
            }
            return null;
        }catch (\Throwable $exception){
            $log = new LogsRepository();
            $log->create($exception);


            return response()->json(['success'=>false]);
        }
    }

    public function destroy(Request $request)
    {
        // TODO: Implement destroy() method.
    }

    public function update(Request $request)
    {
        // TODO: Implement update() method.
    }
}
