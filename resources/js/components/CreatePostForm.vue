<template>
    <div id="app">
        <div class="center content-inputs container">
            <div class="flex">
                <vs-input class="mr-4" v-model="title" placeholder="title" />
                <vs-select placeholder="Select" v-model="subject">
                    <vs-option v-for="sub in subjects" :key="sub.id" label="Vuesax" :value="sub.id">
                       {{sub.name}}
                    </vs-option>

                </vs-select>
            </div>
            <textarea class="textarea" v-model="description"></textarea>

            <input  id="ImageUpload"  class=" btn-success" type="file"/>
            <vs-button class="btn"@click="CreatePost">Submit</vs-button>



        </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {

        name: 'App',
        data: () => ({
            title: '',
            subject: '',
            subjects:null,
            description:null,
            currentUser: null
        }),
        mounted() {
            this.getSubjects()
            this.getCurrentUserFromLocalStorage()
        },

        methods:{
           getSubjects(){
               axios.get('/api/post/subjects').then(res=>{
                   this.subjects = res.data
                   // console.log(res.data)
               }).catch(e=>{
                   console.log(e.response.data)
               })
           },
            getCurrentUserFromLocalStorage(){
                this.currentUser = JSON.parse(localStorage.getItem('CurrentUser'));

                console.log(this.currentUser.user.id)

            },

            CreatePost(){
               let data = new FormData();
               data.append('title', this.title)
               data.append('subject', this.subject)
               data.append('description', this.description)
               data.append('userId', this.currentUser.user.id)
                data.append('image', ImageUpload.files[0]);
              axios.post("/api/post/create", data).then(res=>{
                  console.log(res.data)
              })
            }

        },
    };
</script>
<style>
    .btn{
        width: 200px;
        margin: auto !important;
        display: block;
    }

    .textarea {
        transition: 0.2s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        min-width: 390px;
        margin: 20px auto;
        border-radius: 10px;
        border: 1px solid #f4f7f8;
        background: #f4f7f8;
        resize: none;
        min-height: 200px;
        padding: 10px;
    }

    .textarea:focus {
        outline: none;
        transition: 0.3s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        border: 1px solid #6e8bff;
    }

    .content-inputs {
        display: flex;
    }

    .container {
        margin: auto;
        width: 100%;
        flex-direction: column;
    }

    @media (min-width: 640px) {
        .container {
            max-width: 640px;
        }
    }

    @media (min-width: 768px) {
        .container {
            max-width: 768px;
        }
    }

    @media (min-width: 1024px) {
        .container {
            max-width: 1024px;
        }
    }

    @media (min-width: 1280px) {
        .container {
            max-width: 1280px;
        }
    }

    .flex {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .mr-4 {
        margin-right: 1rem;
    }
</style>
