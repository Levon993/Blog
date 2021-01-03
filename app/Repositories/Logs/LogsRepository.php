<?php


namespace App\Repositories\Logs;
use App\Repositories\CoreRepository;
use App\Models\Log;
class LogsRepository
{


    public function index(){
        try {

            $Log = new Log();
            $logs = $Log->orderBy('created_at', 'desc')->paginate(7);

            return response()->json($logs);
        }catch (\Throwable $exception){

            $log = new LogsRepository();
            $log->create($exception);


            return response()->json(['success'=>false]);
        }

    }


    public function create($exception){
       $log =new Log();
       $log->file =$exception->getfile();
       $log->line =$exception->getline();
       $log->message =$exception->getMessage();
       $log->save();
    }

}
