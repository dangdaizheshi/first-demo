import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getLoginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
    const userinfo = ref({});
    const getUserinfo = async (form) => {
        const res = await getLoginAPI(form);
        userinfo.value = res.result;
    }
    return {
        userinfo,
        getUserinfo
    }
})
