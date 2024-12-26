<template>
  <UAlert
    v-if="visible"
    icon="i-heroicons-exclamation-circle"
    color="red"
    variant="solid"
    :description="description"
  />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
