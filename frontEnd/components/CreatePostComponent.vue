<template>
<h1>{{textassets.CreatePs}}</h1>
      
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="createPost">
          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-document" class="w-5 h-5 mr-2" />
            <label for="title">{{textassets.title}}</label>
          </div>
          <UInput v-model="newPost.title" placeholder="Enter post title" class="input"  />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-pencil" class="w-5 h-5 mr-2" />
            <label for="description">{{textassets.description}}</label>
          </div>
          <UInput v-model="newPost.description" placeholder="Enter post description" class="input"  />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-tag" class="w-5 h-5 mr-2" />
            <label for="category">{{textassets.category}}</label>
          </div>
        <UInput v-model="newPost.category" placeholder="Enter the category" class="input"  />

          <UButton type="submit" color="black" >
            {{textassets.createPost}}
          </UButton>
          
        </UForm>
</template>


<script setup>
import { ref } from 'vue';
import { textassets } from '@/assets/textassets'


const emit = defineEmits(['Create-Post']);

const newPost = ref({
  title: '',
  description: '',
  category: ''
});

const createPost = () => {
  emit('Create-Post', newPost); 
}

</script>
