<template>
<div>
  <NavigationBar />
  <HeaderSection />
  <carousel-section />
  <trending-section />
  <BottomNavigationBar />
  <FooterSection />
</div>
</template>

<script>
import CarouselSection from '../components/carousel/CarouselSection.vue';
import TrendingSection from '../components/gallery/TrendingSection.vue';

export default {
  components: { TrendingSection, CarouselSection },
};
</script>
