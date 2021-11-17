<template>
  <div class="mt-20 mb-5 font-rubik px-5 md:px-20">
    <h2 class="font-semibold text-gray-800 text-xl">Browse Our Trending</h2>
    <h3 class="font-semibold text-green-primary text-xl">Receipt</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 md:gap-x-5">
      <div v-for="(item, index) in list" :key="item.index">
        <trending-item :dataItem="list[index]"></trending-item>
      </div>
    </div>
    <div class="mt-10 mb-40 text-center hidden md:block ">
      <button class="bg-green-primary text-white rounded-full py-3 px-10 hover:bg-green-hover transition">All Receipt</button>
    </div>
  </div>
</template>
<script>
import TrendingItem from './TrendingItem.vue';

export default {
  components: { TrendingItem },
  name: 'TrendingSection',
  data() {
    return {
      list: [
        {
          name: 'Pizza Pepperoni',
          category: 'Pizza',
          url_image: 'pepperoni-thumbnail.png',
          background_color: 'bg-pastel-tosca',
          rating: 4,
        },
        {
          name: 'Pizza Meat',
          category: 'Pizza',
          url_image: 'pizza-thumbnail.png',
          background_color: 'bg-pastel-tosca',
          rating: 3,
        },
        {
          name: 'Donner Kebab',
          category: 'Kebab',
          url_image: 'kebab-thumbnail.png',
          background_color: 'bg-pastel-blue',
          rating: 5,
        },
        {
          name: 'Salmon Roll',
          category: 'Salmon',
          url_image: 'sushi-thumbnail.png',
          background_color: 'bg-pastel-pink',
          rating: 4,
        },
        {
          name: 'Cupcake Choco',
          category: 'Cupcake',
          url_image: 'cookies-thumbnail.png',
          background_color: 'bg-pastel-green',
          rating: 4,
        },
        {
          name: 'Doughnut Milk',
          category: 'Doughnut',
          url_image: 'donut-milk-thumbnail.png',
          background_color: 'bg-pastel-yellow',
          rating: 5,
        },
        {
          name: 'Doughnut Unicorn',
          category: 'Doughnut',
          url_image: 'donut-unicorn-thumbnail.png',
          background_color: 'bg-pastel-yellow',
          rating: 4,
        },
        {
          name: 'Kathi Kebab',
          category: 'Kebab',
          url_image: 'kebab-thumbnail.png',
          background_color: 'bg-pastel-blue',
          rating: 4,
        },
      ],
    };
  },
};
</script>
