<?php

namespace App\Models;
use App\Models\Subject;
use App\User;
use App\Models\Like;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{


    public function subject()
    {
        return $this->belongsToMany(Subject::class, 'subject_post', 'post_id', 'subject_id');
    }
    public function userLike()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function likesCount()
    {
        return $this->likes()->count();
    }
}
