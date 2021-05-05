//This reducer hold the lastapplied sort option by the logined user
const lastAppliedOption=(state="",action)=>{
     switch(action.type){
         case "Option":
             return action.option
        default:
            return state
     }
}
export default lastAppliedOption