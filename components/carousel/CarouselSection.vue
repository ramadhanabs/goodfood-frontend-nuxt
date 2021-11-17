<template>
  <div class="mt-14 mb-5 font-rubik px-5 md:px-20">
    <h2 class="font-semibold text-gray-800 text-xl">Browse Our Category</h2>
    <h3 class="font-semibold text-green-primary text-xl">Receipt</h3>
    <div class="flex overflow-x-scroll hide-scroll-bar">
      <div v-for="(item, index) in list" :key="item.index">
        <CarouselItem :dataItem="list[index]" />
      </div>
    </div>
    <div class="hidden md:block">
      <div class="flex flex-row gap-x-2 justify-end">
        <button type="button" class="bg-green-primary hover:bg-green-hover transition rounded-full px-3 py-2">
          <div class="flex flex-row text-white gap-x-2 content-center">
            <div class="mt-0.5">
              <font-awesome-icon :icon="['fas', 'chevron-circle-left']" class="text-xl" />
            </div>
            Prev
          </div>
        </button>
        <button type="button" class="bg-green-primary hover:bg-green-hover transition rounded-full px-3 py-2">
          <div class="flex flex-row text-white gap-x-2 content-center">
            Next
            <div class="mt-0.5">
              <font-awesome-icon :icon="['fas', 'chevron-circle-right']" class="text-xl" />
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarouselSection',
  data() {
    return {
      list: [
        {
          name: 'Cupcake',
          amount: '22',
          url_image: 'icon-cupcake.png',
          background_color: 'bg-pastel-green',
        },
        {
          name: 'Donut',
          amount: '11',
          url_image: 'icon-donut.png',
          background_color: 'bg-pastel-tosca',
        },
        {
          name: 'Pizza',
          amount: '25',
          url_image: 'icon-pizza.png',
          background_color: 'bg-pastel-blue',
        },
        {
          name: 'Kebab',
          amount: '12',
          url_image: 'icon-kebab.png',
          background_color: 'bg-pastel-yellow',
        },
        {
          name: 'Salmon',
          amount: '30',
          url_image: 'icon-salmon.png',
          background_color: 'bg-pastel-pink',
        },
        {
          name: 'Pizza',
          amount: '25',
          url_image: 'icon-pizza.png',
          background_color: 'bg-pastel-blue',
        },
        {
          name: 'Kebab',
          amount: '12',
          url_image: 'icon-kebab.png',
          background_color: 'bg-pastel-yellow',
        },
        {
          name: 'Salmon',
          amount: '30',
          url_image: 'icon-salmon.png',
          background_color: 'bg-pastel-pink',
        },
      ],
    };
  },
};
</script>
