<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      <div class="modal-footer">
        <UButton @click="confirm" color="black">Confirm</UButton>
        <UButton @click="close" color="red">Cancel</UButton>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { textassets } from '@/assets/textassets';


export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: 'Confirm Action',   
      message: 'Are you sure you want to delete?'  
    };
    },
  methods: {
    close() {
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm');
      this.close();
    },
  },
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

.modal-header h2 {
  margin: 0;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
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
