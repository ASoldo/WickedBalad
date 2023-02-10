<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, provide, inject, onMounted } from "vue";
import { storeToRefs } from "pinia";
import Dungeon from "@/components/dungeon.vue";
import { useCounterStore } from "@/stores/counter";
import mitt from "mitt";
const emitter = mitt();

emitter.on("myevent", (value: any) => {
  // *Listen* for event
  console.log("myevent received!", `value: ${value}`);
});
const mystore = useCounterStore();
const { count } = storeToRefs(mystore);
const myValue = ref(333);
const prov = provide("myValue", myValue);
const prove = provide("emitter", emitter);
console.log(myValue.value);
console.log(count.value);
</script>

<template>
  <!-- <nav> -->
  <!--   <RouterLink to="/">Home</RouterLink> -->
  <!--   <RouterLink to="/about">About</RouterLink> -->
  <!-- </nav> -->
  <RouterView />
</template>

<style scoped>

</style>
