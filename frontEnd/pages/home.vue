<template>
  <div class="main-container">
    <div class="logout-container">
      <UButton type="submit" color="black" @click="logout">
        {{ textassets.logout }}
      </UButton>
    </div>

    <div class="content-container">
     <CreatePostComponent @Create-Post="createPostsubmit"/> 
     <Alert 
        v-if="showAlert"
        :visible="showAlert"
        :description="errormessage"
      />  
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
import CreatePostComponent from '@/components/CreatePostComponent.vue';
import PostService from '@/services/Posts';
import Alert from '@/components/Alert.vue' 


const authService = new AuthService();
const router = useRouter();
const PostServiceins = new PostService();
const errormessage = ref("");
const showAlert = ref(false);

const logout = () => {
  authService.logout();
  router.push('/login');
};

const createPostsubmit =  async (Postdata) => {
  try {
    await PostServiceins.CreatePost(Postdata.value,authService.TokenValue());
    Postdata.title = "";
    Postdata.description ="";
    Postda.category = "";
    showAlert.value = false; 
  } catch (error) {
    console.error("Registration error:", error);
     errormessage.value = error.message
    showAlert.value = true; 
  }
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
