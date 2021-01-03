<template>
    <div>
        <div class="card">
            <div class="card-image"></div>
            <div class="card-text">
            <span class="date">4 days ago</span>
            <h2>Post One</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div class="card-status"></div>
        </div>
    </div>
</template>
<style>
    .card{
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 210px 210px 80px;
        grid-template-areas: "image" "text" "status";
        font-family: Roboto;
        border-radius: 10px;
        background: white;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    }
    .card-image{
      grid-area: image;

    }
    .card-text{
        grid-area: text;
    }
    .card-status{
        grid-area: status;
    }
</style>
