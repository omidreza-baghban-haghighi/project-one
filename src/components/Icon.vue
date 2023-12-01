<!-- src/components/Icon.vue -->

<template>
    <font-awesome-icon :icon="icon" />
  </template>
  
  <script>
  export default {
    props: {
      icon: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  