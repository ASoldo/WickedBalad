<script setup lang="ts">
import Tabs from "./../components/Tabs.vue";
import Steps from "./../components/steps.vue";
import { ref } from "vue";
const stepIndex = ref(0);
const setStepIndex = (index: number) => {
  stepIndex.value = index;
  console.log(stepIndex.value);
};
const logme = (value: number) => {
  console.log(value);
};
</script>

<template>
  <div class="card bg-gray-500 flex justify-center ml-auto mr-auto">
    <Tabs @stepsindex="setStepIndex" class="ml-auto mr-auto" />
    <!-- <Steps :steptext="stepIndex" class="" /> -->
  </div>
</template>
