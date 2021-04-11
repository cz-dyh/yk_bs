const demo={
    state:{
        name:'小明'
    },
    mutations: {
        nameAddStr:(state,str)=>{
            state.name=state.name+'   你好！！'+str
        }
    },
    actions: {
        nameAction: ({ commit }) => {
            commit('nameAddStr');
            commit('nameAddStr');
        }
    }
}

export default demo;
