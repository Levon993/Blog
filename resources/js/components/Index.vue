<template>

        <div   style="margin-left: 450px">
    <div style="right:120px" class="center  container">
        <div class="flex">
    <vs-card  v-for="post in posts" :key="post.id">
        <template #title>
            <h3>{{post.title}}</h3>
        </template>
        <template #img>

                <img :src="'http://my-blog.loc/storage/images/'+post.image">


        </template>
        <template #text>
            <p>
                {{post.description}}
            </p>
        </template>
        <template #interactions>
            <vs-button danger icon>
                <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
          54
        </span>
            </vs-button>
        </template>
    </vs-card>
    </div>
    </div>
    </div>
</template>
<script>
    // import phat from '/storage/app/public/images/chris.jpg'
    import axios from 'axios'
    export default {
        data(){
            return{
                posts:null,
                errors:null,
                url:null,
                img: `FE 7E E3
C3 18 F3
FE 18 DB
C3 18 CF
FE 7E C7`
            }
        },
        mounted() {
            this.getAllPosts()
        },

        methods:{
            getAllPosts(){
            axios.get('/api/post/get').then(res=>{
                this.posts = res.data[0].data
                this.url = res.data[1]

                // console.log(this.posts)
                console.log(this.url)
            }).catch(e=>{
                this.errors = e.response.data
            })
            },
            test(dd){
                alert(dd)
            }
        }
    }
</script>
