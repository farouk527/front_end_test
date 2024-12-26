<template>
  <div>
    <div class="main-container"> 
    <div class="RegisterForm">
      <div class="container">
        <h1 style="margin-left:25%">{{ textassets.register }}</h1>
        <UForm :schema="schema" :state="state" class="space-y-4" > 
        <div class="flex items-center">
            <UIcon name="i-heroicons-outline-user" class="w-5 h-5 mr-2" required/>
            <label>{{ textassets.username }}</label> 
          </div>
          <UInput v-model="LoginForm.username" placeholder="Select your name" class="input"  />

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
            {{ textassets.register }}
          </UButton>
        </UForm>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { textassets } from '@/assets/textassets'

const LoginForm = ref({
  username : '',
  email: '',
  password: ''
})


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
