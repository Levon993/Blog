<template>
    <div class="container">

        <!-- Card deck -->
        <div class="card-deck row">

            <div v-for="post in posts" class="col-xs-12 col-sm-6 col-md-4">
                <!-- Card -->
                <div class="card">

                    <!--Card image-->
                    <div class="view overlay">
                        <img class="card-img-top" :src="'http://my-blog.loc/storage/images/'+post.image" alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <!--Card content-->
                    <div class="card-body">

                        <!--Title-->
                        <h4 class="card-title">{{post.title}}</h4>
                        <h4 class="card-title">{{post.subject.name}}</h4>
                        <!--Text-->
                        <p class="card-text text">{{post.description}}</p>
                        <p>likes <span>{{likeCount(post.id)}}</span></p>
                        <div>

                        </div>
                        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                        <button type="button" class="btn btn-light-blue btn-md">Read more</button>
                        <button type="button" @click="like(post.id)" class="btn btn-light-blue btn-md">Like</button>

                    </div>

                </div>
                <!-- Card -->
            </div>

        </div>

    </div>
</template>
<script>
    // import phat from '/storage/app/public/images/chris.jpg'
    import axios from 'axios'
    // <img :src="'http://my-blog.loc/storage/images/'+post.image">
    export default {
        data(){
            return{
                posts:null,
                errors:null,
                User:null,
                likes: null

            }
        },
        mounted() {
            // this.likeCount(17)
            this.getAllPosts()
            this.getCurrentUserFromLocalStorage()
        },

        methods:{
            getCurrentUserFromLocalStorage(){
                  let User = JSON.parse(localStorage.getItem('CurrentUser'))
                this.User = User.user

            },
            likeCount(id){
                let data ={
                    id: id
                }

              axios.post('/api/post/likes/count', data).then(res=>{
                  this.likes = res.data

              })
                return this.likes
            },
            getAllPosts(){
            axios.get('/api/post/get').then(res=>{
                 // console.log(res.data.data)
                this.posts = res.data.data

            }).catch(e=>{
                this.errors = e.response.data
            })
            },
            like(id){
                let data = {
                    postId:id,
                    userId: this.User.id,
                    isLike: false,


                    }
                axios.post('/api/post/like', data).then(res =>{
                    console.log(res.data)
                }).catch(e=>{
                    console.log(e.response.data)
                })
            }
        }
    }
</script>
<style>
    .card{
        margin: 5% 0%;
    }

    .card-body{
        margin: 0% 0% 0% 3%;
        padding: 6% 0%;
    }
    .text{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }


</style>
