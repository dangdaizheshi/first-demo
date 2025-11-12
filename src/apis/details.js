import http from "@/utils/http";

export const getDetail = (id) => {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return http({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}