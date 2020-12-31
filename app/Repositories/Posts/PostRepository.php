<?php


namespace App\Repositories\Posts;
use App\Repositories\CoreRepository;
use App\Models\Post as Model;
use App\Repositories\ResourcesInterface;
use App\Models\Subject;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostRepository extends CoreRepository implements ResourcesInterface
{

    public function index(Request $request)
    {
        $posts = $this->startConditions()->paginate(20);
        $url =  public_path();
        return response()->json([$posts, $url] );
    }

    protected function getModelClass()
    {
        return Model::class;
    }


    public function getPostSubjests(){
        $subjects = Subject::all();
        return response()->json($subjects);
    }

    public function create(Request $request)
    {
        $file = $request->file('image');

        if(!$request->hasFile('image')){
            return response()->json(['image not found']);
        }

//        $file = $request->file('image');
        if(!$file->isValid()){
            return response()->json(['invalid file upload']);
        }
        $path = public_path() . '/storage/images';

        $file->move($path, $file->getClientOriginalName());
        $storagePhat= Storage::url( 'app/public/images/'. $file->getClientOriginalName() );
        $post  = $this->startConditions();
        $post->title = $request->title;
        $post->image =  $file->getClientOriginalName() ? $file->getClientOriginalName() : 'empty';
        $post->description = $request->description;
        $post->user_id = $request->userId;
        $post->save();
        $post->subject()->attach([$post->id,$request->subject]);

        return response()->json($path);
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
