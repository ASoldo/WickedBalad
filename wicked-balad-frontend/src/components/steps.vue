<template>
  <div>
    <ul class="steps steps-vertical">
      <li data-content="★" class="step">Register</li>
      <li class="step">Choose plan</li>
      <li class="step">Purchase</li>
      <li class="step step-primary">Purchase</li>
      <li class="step step-primary">{{ steptext }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  steptext?: number;
}>();
</script>
