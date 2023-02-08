<template>
  <div class="w-full">
    <div class="justify-center align-middle">
      <button class="btn btn-primary btn-outline w-12 h-10">???</button>
    </div>
    <div class="justify-center hover:bg-gray-900">
      <button class="btn btn-primary w-12 h-10 btn-outline">???</button>
      <button class="btn btn-primary w-12 h-10 btn-outline">???</button>
    </div>
    <div class="justify-center">
      <button class="btn btn-primary w-12 h-10 btn-outline">???</button>
      <button class="btn btn-primary w-12 h-10 btn-outline">???</button>
      <button class="btn btn-primary w-12 h-10 btn-outline">???</button>
    </div>
    <div class="justify-center">
      <button class="btn btn-primary w-12 h-10 btn-outline">???</button>
      <button class="btn btn-primary w-12 h-10 btn-outline">???</button>
    </div>
    <div class="justify-center">
      <button @click="
        {
          counter++;
      emms('olla', counter);
        }
      " class="btn btn-primary w-12 h-10 btn-outline">
        {{ counter }}{{ inj }}
      </button>
    </div>
    <ul class="left-0 bottom-0 right-0 steps steps-horizontal h-full overflow-hidden mt-5">
      <li data-content="★" class="step"></li>
      <li class="step"></li>
      <li class="step"></li>
      <li class="step step-primary"></li>
      <li :data-content="counter" class="step step-primary"></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, inject, defineEmits } from "vue";
const counter = ref(0);
const emms = defineEmits<{ (event: "olla", cntr: number): void }>();
const inj = inject("myValue");
</script>
<style scoped>

</style>
