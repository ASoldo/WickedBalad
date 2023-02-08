<template>
  <div class="card w-96 bg-base-100 shadow-xl overflow-hidden ml-auto mr-auto">
    <div class="card-body justify-center align-middle relative">
      <Carousel class="" ref="carousel" v-model="next" :items-to-show="1.5" :wrap-around="true" :settings="{
        itemsToShow: 1,
        snapAlign: 'center',
        mouseDrag: false,
        touchDrag: false,
      }">
        <Slide class="" v-for="(slide, i) in comps" :key="i">
          <component class="" @olla="
            {
              emmitToUpper($event);
              next++;
            }
          " :is="comps[i]"></component>
        </Slide>
      </Carousel>
      <!-- <button class="btn btn-primary" @click="next++">Press me</button> -->
    </div>
    <ul class="left-0 bottom-0 right-0 steps steps-horizontal h-full overflow-hidden mt-5 mb-5">
      <li data-content="★" class="step step-success"></li>
      <li class="step step-success"></li>
      <li class="step"></li>
      <li class="step"></li>
      <li data-content="*" class="step"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, onMounted, shallowRef, defineEmits } from "vue";
import Dungeon from "./dungeon.vue";
import Battle from "./battle.vue";
import Afrermath from "./aftermath.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const toggle = ref(0);
const comps = shallowRef([Dungeon, Battle, Afrermath]);
const next = ref(0);
const ollaTrigger = () => {
  console.log("Olla triggered");
};
const emms = defineEmits<{
  (event: "stepsindex", stepindex: number): void;
}>();
const emmitToUpper = (next: number) => {
  emms("stepsindex", next);
  console.log(next);
};
const emitter = inject("emitter");
emitter.emit("myevent", 100);
</script>
<style>

</style>
