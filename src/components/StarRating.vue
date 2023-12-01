<template>
    <div>
      <div class="star" v-for="(star, index) in stars" :key="index" @click="selectStar(index)">
        <i :class="{ 'fas': star, 'far': !star }" class="fa-star"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stars: Array(5).fill(false),
      };
    },
    methods: {
      selectStar(index) {
        this.stars = this.stars.map((star, i) => i <= index);
      },
    },
  };
  </script>
  
  <style scoped>
  .star {
    display: inline-block;
    cursor: pointer;
    font-size: 24px;
    color: gold;
  }
  </style>
  