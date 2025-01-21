// 获取所有商品分类

// import http from 'axios';

// export const getAllCategories = () => {
//     return http.get('/api/categories');
// };

// // 根据分类ID获取分类信息
// export const getCategoryById = (categoryId) => {
//     return http.get(`/api/categories/${categoryId}`);
// };
import httpInstance from "@/utils/http";

export function getAllCategoriesAPI(){
    return httpInstance({
        url:'/api/categories'
    })
}
