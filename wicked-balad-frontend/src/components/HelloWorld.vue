<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img style="height: 400px" height="400" src="https://picsum.photos/600/400" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>{{ msg }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
