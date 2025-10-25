import http from "@/utils/http";

export function getC() {
    return http({
        url: 'home/category/head'
    })
}