<template>
  <div class="overlay" @click="toggleModal()">
    <div class="modal">
      <div class="modal-content">
        <img :src="modalMovie !== null && `https://res.cloudinary.com/christekh/image/fetch/w_auto,h_500,f_auto/http://image.tmdb.org/t/p/w500/${modalMovie.poster_path}`" alt="">
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  width: 60%;
  height: 500px;
  background: #fff;
  z-index: 2;
  border-radius: 4px;
}
.modal-content {
  display: flex;
  width: 50%;
  margin: 0;
  
}
.modal-content img {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
}
</style>

<script>
export default {
  props: ['title', 'toggleModal', 'modalMovie', 'posterPath']
};
</script>
