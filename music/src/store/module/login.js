

export default{
    state:{
        token:''
    },
    mutations:{
        SAVE_TOKEN(state,payload){
            state.token=payload.token
            console.log(payload)
        }
    }
}
