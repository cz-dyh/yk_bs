import Vue from 'vue';
import Vuex from 'vuex';
/*引入getters方法*/
import getters from './getters';
/*引入各个store模块*/
import demo from './modules/demo';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        demo
    },
    getters,
});
/*store使用说明*/
// 1、在modules中新增模块，编写mutation和action，并导出模块
// 2、在store.js中引入模块，并注册到modules对象上
// 3、在getters中添加模块的getter方法
export default store;
