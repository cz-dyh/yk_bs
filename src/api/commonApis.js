import service from '@/http/request'
// export const funcss=(params)=>service.post('url',params)
 export const login=(params)=>service.post('/api/user/login',params)
