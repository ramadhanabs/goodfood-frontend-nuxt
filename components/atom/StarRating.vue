<template>
  <div class="mt-5 gap-0">
    <font-awesome-icon :icon="['fas', 'star']" v-for="star, index in maxStar" :key="index" :class="[index < rating ? active : inactive]" />
  </div>
</template>
<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      check: true,
      active: 'text-yellow-300',
      inactive: 'text-gray-300',
      maxStar: 5,
    };
  },
  computed: {
    remainingStars() {
      return this.maxStar - this.rating;
    },
  },
};
</script>
