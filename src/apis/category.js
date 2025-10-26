import http from "@/utils/http";

export const getCategoryAPI = (id) => {
    return http({
        url: "/category",
        params: {
            id,
        }
    })
}

export const getCategoryFilterAPI = (id) => {
  return http({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}