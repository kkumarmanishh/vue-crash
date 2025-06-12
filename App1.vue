<!-- #Basics of Vue JS -->

<!-- Learn Opton Apis
<script>
export default{
  data(){
    return {
      name: "John Doe",
      status: "active",
      tasks: ['Task one', 'Task Two', 'Task three'],
      link:'https://google.com',
    }
  },
  methods: {
    toggleButton(){
      console.log("button clicked");
      if(this.status==='active'){
        this.status='pending'
      }
      else if(this.status==='pending'){
        this.status='inactive'
      }
      else{
        this.status='active'
      }
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active </p>
  <p v-else-if="status === 'pending'">User is pending </p>
  <p v-else="status === 'inactive'">User is Inactive</p>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>

  # <a v-bind:href="link">Click here for Google</a>
  <a :href="link">Click here for Google</a>
  #<button v-on:click="toggleButton">Click Me</button>
   <button @click="toggleButton">Change Status</button>
</template>


# Learn composition apis

<script setup>
import { ref, onMounted } from 'vue';
const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['Task One', 'Task Two', 'Task Three']);
const newTask=ref('');

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  }
  else if (status.value === 'pending') {
    status.value = 'inactive';
  }
  else {
    status.value = 'active';
  }
};

const addTask=()=>{
  if(newTask.value.trim() !== ''){
    tasks.value.push(newTask.value);
    newTask.value='';
  }
}

const deleteTask=(index)=>{
  tasks.value.splice(index,1);
}

onMounted(async ()=>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value=data.map((task)=>task.title);
  }catch(err){
    console.log("Error : ",err);
  }
});

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active </p>
  <p v-else-if="status === 'pending'">User is pending </p>
  <p v-else="status === 'inactive'">User is Inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask"/>
    <button @submit="addTask" type="submit">submit</button>
  </form>

  <h3>Tasks: </h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>

  #<button v-on:click="toggleButton">Click Me</button>
  <button @click="toggleStatus">Change Status</button>
</template>
-->