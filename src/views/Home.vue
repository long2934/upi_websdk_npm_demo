<template>
  <div class="home">
    <main class="wrapper">
      <h2>Recommended</h2>
      <div class="recommended">
        <ProductCard v-for="(product, index) in inventory.slice(0, 3)" :key="product.id" :index="index" :product="product" :addToCart="addToCart" class="card">
        </ProductCard>>
      </div>
    </main>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
	name: 'Home',
	props: ['inventory', 'addToCart'],
	components: {
		ProductCard
	}
}
</script>
