import Vue from 'vue'
import Router from 'vue-router'
import MemberCompenent from "../components/tarbar/MemberCompenent.vue";
import versionInfo from "../components/cubcomponent/versionInfo.vue";
import login from "../components/cubcomponent/login.vue";
import register from "../components/cubcomponent/register.vue";
import loginsuccess from "../components/cubcomponent/loginsuccess.vue";
import newsinfo from "../components/news/newsinfo.vue";
import bookComponent from "../components/tarbar/bookComponent.vue";
import error from "../components/cubcomponent/error.vue";
import userinfo from "../components/cubcomponent/userinfo.vue";
import root from "../components/cubcomponent/root.vue";
import bookinfo from "../components/book/bookinfo.vue";
import mycomments from "../components/cubcomponent/mycomments.vue";
import ordeBook from "../components/book/ordeBook.vue";
import myorder from "../components/cubcomponent/myorder.vue";
import commentAd from "../components/root/commentAd.vue";
import librarybookAd from "../components/root/librarybookAd.vue";
import orderAd from "../components/root/orderAd.vue";
import upbookAd from "../components/root/upbookAd.vue";
import userAd from "../components/root/userAd.vue";
import orderBookManage from "../components/root/BookCommentsManage.vue";
import suggest from "../components/cubcomponent/suggest.vue";
import suggestdeal from "../components/root/suggestdeal.vue";
import homeComponent from "../components/tarbar/HomeComponent"

Vue.use(Router)

export default new Router({
  routes:
    [
      {path:'/',redirect:'/home'},
      {
        path:'/home',
        component:()=>import('@page/mainView'),
      },
      {path:'/homePage',component:homeComponent},
      {path:'/member',component:MemberCompenent},
      {path:'/member/version',component:versionInfo},
      {path:'/member/loginuser',component:login},
      {path:'/member/register',component:register},
      {path:'/member/su',component:loginsuccess},
      {path:'/home/newsinfo/:id',component:newsinfo},
      {path:'/book',component:bookComponent},
      {path:'/error',component:error},
      {path:'/member/su/userinfo',component:userinfo},
      {path:'/member/su/suggest',component:suggest},
      {path:'/member/su/root',component:root},
      {path:'/book/bookinfo/:id',component:bookinfo},
      {path:'/member/su/mycomment',component:mycomments},
      {path:'/book/orderbook/:id',component:ordeBook},
      {path:'/myorder',component:myorder},
      {path:'/member/su/root/cAd',component:commentAd},
      {path:'/member/su/root/lAd',component:librarybookAd},
      {path:'/member/su/root/oAd',component:orderAd},
      {path:'/member/su/root/ubAd',component:upbookAd},
      {path:'/member/su/root/uAd',component:userAd},
      {path:'/member/su/root/cAd/bcm',component:orderBookManage,name:'bcm'},
      {path:'/member/su/root/suggestdeal',component:suggestdeal},
    ],
  linkActiveClass:'mui-active'//覆盖选择高亮类，

})
