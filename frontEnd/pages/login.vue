<template>
  <div class="main-container"> 
    <div class="loginForm">
      <div class="container">
        <h1 style="margin-left:25%">{{ textassets.login }}</h1>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="login"> 
          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-mail" class="w-5 h-5 mr-2" required/>
            <label>{{ textassets.email }}</label> 
          </div>
          <UInput v-model="LoginForm.email" placeholder="Enter Your Email : Example: fba@gmail.com" class="input" />
          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-lock-closed" class="w-5 h-5 mr-2" />
            <label>{{ textassets.password }}</label> 
          </div>
          <UInput v-model="LoginForm.password" type="password" class="input" placeholder="Enter Your Password ******" />

          <UButton type="submit" color="black">
            {{ textassets.login }}
          </UButton>
          
        </UForm>
        <div>
          You Don't Have An Account ? 
          <button @click="navigateToRegister" style="color:red;">Please Register</button>
        </div> 
      </div>

      <Alert 
        v-if="showAlert"
        :visible="showAlert"
        :description="errormessage"
      />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from '#app'
import { textassets } from '@/assets/textassets'
import AuthService from '@/services/auth';
import Alert from '@/components/Alert.vue' 


definePageMeta({
  middleware: [
    'redirectauth',
  ]
});

const config = useRuntimeConfig()
const apiBase = config.public.apiBase
const authService = new AuthService(); 

const LoginForm = ref({
  email: '',
  password: ''
})

const errormessage = ref("");
const showAlert = ref(false);

const router = useRouter()

const login = async () => {
  try {
    await authService.login(LoginForm.value.email, LoginForm.value.password);
    router.push('/home');
    showAlert.value = false;
  } catch (error) {
    errormessage.value = error.message
    showAlert.value = true; 
    console.error("Login error:", error);
  }
}

const navigateToRegister = () => {
    router.push('/register');
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

.loginForm {
  width: 35%;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  border-radius : 5%;
  padding: 20px;
} 

.input {
  width: 60%;
}

.container {
  margin-left: 20%;
}
</style>

