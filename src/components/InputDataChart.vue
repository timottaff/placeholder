<template>
  <div>
    <input type="text" v-model="message" /> 
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return{
        message: 'Ini Placeholder'
    }
  }
};
</script>