<?php

namespace App\Models;
use App\Models\Subject;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function subject()
    {
        return $this->belongsToMany(Subject::class, 'subject_post', 'post_id', 'subject_id');
    }
}
