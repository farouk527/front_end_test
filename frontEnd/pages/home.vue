<template>
  <h1>Bienvenue</h1>
   <UButton type="submit" color="black" @click="logout">
            {{ textassets.logout }}
          </UButton>
</template>

<script setup>
import AuthService from '@/services/auth';
import { textassets } from '@/assets/textassets'
import { useRouter } from '#app'


const authService = new AuthService();
const router = useRouter()

const logout = () => {
    authService.logout();
    router.push('/login')
}

</script>
