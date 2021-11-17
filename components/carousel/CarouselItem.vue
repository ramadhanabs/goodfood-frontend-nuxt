<template>
    <div class="inline-block px-2">
        <div :class="`${dataItem.background_color} my-5 mx-auto w-56 py-7 rounded-xl align-middle transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out`">
          <div class="block mb-5">
            <img :src="require(`~/assets/icon/${dataItem.url_image}`)" alt="icon" class="h-12 mx-auto">
          </div>
          <p class="text-gray-600 text-center font-bold">{{dataItem.name}}</p>
          <p class="text-gray-600 text-center">{{dataItem.amount}} Items</p>
        </div>
      </div>
</template>
<script>
export default {
  name: 'CarouselName',
  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
