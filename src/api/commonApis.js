import service from '@/http/request'
// export const funcss=(params)=>service.post('url',params)
//登录接口
 export const login=(params)=>service.post('/api/user/login',params);
//注册接口
export const addUser=(params)=>service.post('/api/user/addUser',params);
//获取用户信息接口
export const userinfo=(params)=>service.post('/api/user/userinfo',params)
//修改用户信息接口
export const updateuserinfo=(params)=>service.post('/api/user/updateuserinfo',params)
//修改用户密码接口
export const updateuserinfopwd=(params)=>service.post('/api/user/updateuserinfopwd',params)



//获取图书列表接口
export const getAllBook=()=>service.get('/api/book/getAllBook');
//获取图书信息接口
export const getBookById=(params)=>service.post('/api/book/getBookById',params);



//获取用户评论接口
export const getUserComment=(params)=>service.post('/api/BookComment/getUserComment',params);



//获取用户图书预约接口
export const getUserOrder=(params)=>service.post('/api/orderBook/getUserOrder',params);


//获取新闻列表接口
export const getallnews=()=>service.get('/api/new/getallnews');
