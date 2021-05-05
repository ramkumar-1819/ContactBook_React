//This reducer hold all user datas from the API
const UserData=(state=[],action)=>{
    switch(action.type){
        case "Success":
            return {type:true,datas:action.data}
        case "Failure":
            return {type:false}
        default:
            return state
    }
}
export default UserData
