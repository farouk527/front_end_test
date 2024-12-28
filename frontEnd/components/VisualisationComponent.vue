<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
          <th>{{textassets.Update}}</th> 
           <th>{{textassets.Delete}}</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.category }}</td>
          <td>
             <UButton color="green" variant="solid"  @click="updateItem(item)">
                          <UIcon name="i-heroicons-outline-pencil" class="w-5 h-5 mr-2" />
             </UButton>
          </td>
          <td>
              <UButton color="red" variant="solid"  @click="updateItem(item)">
                          <UIcon name="i-heroicons-outline-trash" class="w-5 h-5 mr-2" />
</UButton>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { textassets } from '@/assets/textassets';

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
  { key: 'category', label: 'Category' },
]
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const updateItem = (item) => {
  console.log('Mettre à jour l\'élément:');
}

const deleteItem = (id) => {
  console.log('Supprimer l\'élément avec ID:');
}
</script>



<style scoped>
table {
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
button:hover {
  background-color: black;
}
</style>
