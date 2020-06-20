import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
state: {
    // num:100,
    Dataicon:{},
     // 存储token
     Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
},
getters:{
    // count:state=>{
    //     return state.num>120 ?120:state.num
    // },
    getDataicon:state=> state.Dataicon

},

mutations: {
    incrementa(state,pload) {
        state.num+=pload.n
        // setTimeout(function() {
        //     state.num+=pload.n
        // },1000)
       
    },
    mincrement(state,pload) {
        state.num-=pload
    },
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
        state.Authorization = user;
        localStorage.setItem('Authorization', user);
    },
   chengeicon(state,user) {
       state.Dataicon= user;
   }
},
actions:{
    Addactions(context) {
      console.log(context)
      setTimeout(()=> {
        context.commit('incrementa',{n:4});
    },1000)

    }
}
})
export default store //需要导出