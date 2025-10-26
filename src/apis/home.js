import http from '@/utils/http';

export function getBannerAPI(obj = {}) {
    const { distributionSite = "1" } = obj;
    return http({
        url: "home/banner",
        params: {
            distributionSite,
        }
    });
}

export function getNewsAPI() {
    return http({
        url:'/home/new',
    })
}

export const getHotAPI = () => {
    return http({
        url: 'home/hot',
    })
}

export const getProductAPI = () => {
    return http({
        url: 'home/goods',
    })
}