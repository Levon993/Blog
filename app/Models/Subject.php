<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Post;

class Subject extends Model
{
    public function subject()
    {
        return $this->belongsToMany(Post::class, 'subject_post', 'subject_id', 'post_id');
    }
}
