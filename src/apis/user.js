import http from "@/utils/http";

export function getLoginAPI({ account, password }) {
    return http({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password    
        }
    })
}