const UserData=(state=[],action)=>{
    switch(action.type){
        case "Success":
            return {type:true,datas:action.data}
        case "Failure":
            return {type:false}
        case "id":
            return {type:"byid",datas:action.data}
        default:
            return state
    }
}
export default UserData
