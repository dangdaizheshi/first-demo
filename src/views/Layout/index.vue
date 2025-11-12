<template>
    <layout-fixed />
    <LayoutNav />
    <LayoutHeader />
    <router-view />
    <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import { ref, onMounted } from 'vue';
import { useCategoryStore } from '@/stores/catagory';

const catagoryStore = useCategoryStore()
onMounted(() => catagoryStore.getNavList())
</script>

<style scoped lang="scss">

</style>
