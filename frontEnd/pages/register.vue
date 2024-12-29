<template>
  <div class="main-container">
    <div class="RegisterForm">
    <RegisterComponent @submit-form="handleSubmit" />
    <Alert 
        v-if="showAlert"
        :visible="showAlert"
        :description="errormessage"
      />
      <div>
         {{textassets.existingacount}}
          <button @click="navigateToLogin" style="color:red;">You Can Login</button>
        </div> 
  </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import RegisterComponent from '@/components/RegisterComponent.vue';
import AuthService from '@/services/auth';
import Alert from '@/components/Alert.vue' 
import { useRouter } from '#app'
import { textassets } from '@/assets/textassets'

definePageMeta({
  middleware: [
    'redirectauth',
  ]
});

const authService = new AuthService(); 
const errormessage = ref("");
const showAlert = ref(false);
const router = useRouter();

const handleSubmit = async (formData) => {
  try {
    await authService.Register(formData); 
    showAlert.value = false;
     formData.username = '';
    formData.email = '';
    formData.password = '';
  } catch (error) {
    console.error("Registration error:", error); 
    errormessage.value = error.message
    showAlert.value = true; 
  }
};
const navigateToLogin = () => {
    router.push('/Login');
};
</script>


<style scoped>
.main-container {
  background-color: #1F2833;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.RegisterForm {
  width: 35%;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  border-radius: 5%;
  padding: 20px;
}

</style>