<template>
  <div class="main-container">
    <div class="logout-container">
      <UButton type="submit" color="black" @click="logout">
        {{ textassets.logout }}
      </UButton>
    </div>

    <div class="content-container">
      <h1>Create Post(s)</h1>
      
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="createPost">
          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-document" class="w-5 h-5 mr-2" required/>
            <label for="title">Title</label>
          </div>
          <UInput v-model="newPost.title" placeholder="Enter post title" class="input" required />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-pencil" class="w-5 h-5 mr-2" />
            <label for="description">Description</label>
          </div>
          <UInput v-model="newPost.description" placeholder="Enter post description" class="input" required />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-tag" class="w-5 h-5 mr-2" />
            <label for="category">Category</label>
          </div>
        <UInput v-model="newPost.category" placeholder="Enter the category" class="input" required />

          <UButton type="submit" color="black">
            Create Post
          </UButton>
          
        </UForm>



    </div>
    <div class="content-container">
      <h1>ALL Post(s)</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AuthService from '@/services/auth';
import { textassets } from '@/assets/textassets';
import { useRouter } from '#app';

const authService = new AuthService();
const router = useRouter();
const newPost = ref({
  title: '',
  description: '',
  category: ''
});

const logout = () => {
  authService.logout();
  router.push('/login');
};


</script>

<style scoped>
.logout-container {
  position: fixed;
  top: 10px; 
  right: 10px; 
}
.main-container {
  background-color: #1F2833; 
  min-height: 100vh; 
  display: flex;
  justify-content: center;
  flex-direction: row; 
  gap: 30px; 
  padding: 50px;
}

.content-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 50%;
  height:50%
}
</style>
