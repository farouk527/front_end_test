<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal">
      <div class="modal-footer">
        <h1>{{ textassets.updatePost }}</h1>

        <UForm :schema="schema" :state="state" class="space-y-4" @submit="updatePost">
          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-document" class="w-5 h-5 mr-2" />
            <label for="title">{{ textassets.title }}</label>
          </div>
          <UInput v-model="updatedPost.title" placeholder="Enter post title" class="input" />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-pencil" class="w-5 h-5 mr-2" />
            <label for="description">{{ textassets.description }}</label>
          </div>
        <UTextarea v-model="updatedPost.description" placeholder="Enter post description" class="input" textarea />

          <div class="flex items-center">
            <UIcon name="i-heroicons-outline-tag" class="w-5 h-5 mr-2" />
            <label for="category">{{ textassets.category }}</label>
          </div>
          <UInput v-model="updatedPost.category" placeholder="Enter the category" class="input" />

          <UButton type="submit" color="black">
            {{ textassets.Update }}
          </UButton>
        </UForm>

        <div class="buttons-container">
          <UButton @click="close" color="red">{{ textassets.cancel }}</UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { textassets } from '@/assets/textassets';
import { ref, watch } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  postToUpdate: {
    type: Object,
    required: true,
  },
});

const updatedPost = ref({});

watch(
  () => props.postToUpdate,
  (newPost) => {
    updatedPost.value = { ...newPost };
  },
  { immediate: true } 
);

const emit = defineEmits(['Update-Post', 'close']);

const close = () => {
  emit('close');
};

const updatePost = () => {
  emit('Update-Post', updatedPost.value);
  close();
};

</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #ddd;
}
</style>
