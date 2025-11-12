import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  const navList = ref([])
  const getNavList = async () => {
    const res = await getCategoryAPI();
    navList.value = res.result;
  }
  return { navList, getNavList }
})
