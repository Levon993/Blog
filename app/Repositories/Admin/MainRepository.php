<?php


namespace App\Repositories\Admin;
use App\Repositories\CoreRepository;
use App\User as Model;

class MainRepository extends CoreRepository
{

    protected function getModelClass()
    {
        return Model::class;
    }

}
