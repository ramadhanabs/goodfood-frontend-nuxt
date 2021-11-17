<template>
  <div :class="`${dataItem.background_color} rounded-xl px-5 py-5 my-3 shadow-smooth`">
        <div class="mb-5">
          <img :src="require(`~/assets/image/${dataItem.url_image}`)" alt="thumbnail" class="w-24 h-24">
        </div>
        <p class="font-bold text-xl text-gray-800">{{dataItem.name}}</p>
        <p class="font-semibold text-green-primary">{{dataItem.category}}</p>
        <star-rating :rating="dataItem.rating" />
  </div>
</template>
<script>
import StarRating from '../atom/StarRating.vue';

export default {
  components: { StarRating },
  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
