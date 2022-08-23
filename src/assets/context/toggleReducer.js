const toggleReducer  = (state,action)=>{
    switch(action.type){
        case "TOGGLE":{
            return{
                toggle: !state.toggle,
            }
        }
        default:
            return state;
    }
};
export default toggleReducer;