<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">File</th>
                <th scope="col">Line</th>
                <th scope="col">Message</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="log in logList">
                <th scope="row">{{log.id}}</th>
                <td>{{log.file}}</td>
                <td>{{log.line}}</td>
                <td>{{log.message}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                logList: null,
            }
        },

        mounted() {
            this.getAllLogs()
        },
        methods:{
            getAllLogs(){
                axios.get('/api/logs/get/all').then(res=>{
                    this.logList = res.data.data
                    console.log(this.logList)
                })
            }
        }
    }
</script>
