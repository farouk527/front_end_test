<template>
  <div class="main-container">
    <div class="logout-container">
      <UButton type="submit" color="black" @click="logout">
        {{ textassets.logout }}
      </UButton>
    </div>

    <div class="content-container">
      <CreatePostComponent @Create-Post="createPostsubmit" /> 
      <Alert 
        v-if="showAlert"
        :visible="showAlert"
        :description="errormessage"
      />  
    </div>
    
    <div class="content-container">
      <h1>{{textassets.allposts}}</h1>
      <VisualisationComponent :items="postsFromBackend" @Delete-Post="openDeleteModal"  @Update-Post="openUpdateModal"   />
    </div>

    <Modal 
      :isVisible="isModalVisible"
      @close="closeModal"
      @confirm="confirmDeletion"
    />
    <UpdatePostModal :isVisible="isUpdateModalVisible" @close="closeUpdateModal" :postToUpdate="postIdToDeleteorUpdate" @Update-Post="UpdatePost" />
  </div>


</template>

<script setup>
import { ref } from 'vue';
import AuthService from '@/services/auth';
import { textassets } from '@/assets/textassets';
import { useRouter } from '#app';
import CreatePostComponent from '@/components/CreatePostComponent.vue';
import VisualisationComponent from '@/components/VisualisationComponent.vue';
import PostService from '@/services/Posts';
import Alert from '@/components/Alert.vue';
import Modal from '@/components/Modalcomponent.vue';  
import UpdatePostModal from '@/components/UpdatePostModal.vue';  

const authService = new AuthService();
const router = useRouter();
const PostServiceins = new PostService();
const errormessage = ref('');
const showAlert = ref(false);
const postsFromBackend = ref([]);
const isModalVisible = ref(false);  
const isUpdateModalVisible = ref(false);  
const postIdToDeleteorUpdate = ref(null); 

async function fetchPosts() {
  try {
    const token = authService.TokenValue();
    const response = await PostServiceins.getAllPosts(token);
    return response.data || response.posts || response;
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error.message);
    throw error;
  }
}

onMounted(async () => {
  try {
    postsFromBackend.value = await fetchPosts();
  } catch (error) {
    return;
  }
});

const logout = () => {
  authService.logout();
  router.push('/login');
};

const createPostsubmit = async (Postdata) => {
  try {
    await PostServiceins.CreatePost(Postdata, authService.TokenValue());
    showAlert.value = false;
    postsFromBackend.value = await fetchPosts();
    errormessage.value = '';
  } catch (error) {
    errormessage.value = error.message;
    showAlert.value = true;
  }
};

const openDeleteModal = (id) => {
  postIdToDeleteorUpdate.value = id;
  isModalVisible.value = true;
};
const openUpdateModal = (item) => {
  postIdToDeleteorUpdate.value = item;
  isUpdateModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const closeUpdateModal = () => {
  isUpdateModalVisible.value = false;
};
const confirmDeletion = async () => {
  try {
    if (postIdToDeleteorUpdate.value) {
      await PostServiceins.DeletePost(postIdToDeleteorUpdate.value, authService.TokenValue());
      postsFromBackend.value = await fetchPosts();
      closeModal();  
    }
  } catch (error) {
    console.error('Erreur lors de la suppression du post:', error.message);
  }
};

const UpdatePost = async (updatedpost) => {

try {  
  await PostServiceins.UpdatePost(postIdToDeleteorUpdate.value._id,updatedpost,authService.TokenValue());
    postsFromBackend.value = await fetchPosts();

} 
catch (error) {
console.log(error);
} 
}

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
  height: 50%;
}
</style>
