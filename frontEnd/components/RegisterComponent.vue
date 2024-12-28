<template>
      <div class="container">
        <h1 style="margin-left:25%">{{ textassets.register }}</h1>
        <UForm class="space-y-4" >
          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-user" class="w-5 h-5 mr-2" />
            <label>{{ textassets.username }}</label>
          </div>
          <UInput v-model="form.username" placeholder="Enter your name" class="input" />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-mail" class="w-5 h-5 mr-2" />
            <label>{{ textassets.email }}</label>
          </div>
          <UInput v-model="form.email" placeholder="Enter Your Email: Example: fba@gmail.com" class="input" />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-lock-closed" class="w-5 h-5 mr-2" />
            <label>{{ textassets.password }}</label>
          </div>
          <UInput v-model="form.password" type="password" class="input" placeholder="Enter Your Password ******" />
          <UButton type="submit" color="black" @click="handleSubmit">
            {{ textassets.register }}
          </UButton>
        </UForm>
      </div>
</template>

<script setup>
import { ref } from 'vue';
import { textassets } from '@/assets/textassets';

const emit = defineEmits(['submit-form']);

defineProps({
  onSubmit: {
    type: Function,
    required: true,
  },
});
const form = ref({
  username: '',
  email: '',
  password: '',
});

const handleSubmit = () => {
  emit('submit-form', form.value); 
};
</script>

<style scoped>

.input {
  width: 60%;
}

.container {
  margin-left: 20%;
}
</style>
