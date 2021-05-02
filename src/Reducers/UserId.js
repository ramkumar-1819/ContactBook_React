const UserId=(state="",action)=>{
    switch(action.type){
        case "Fetched":
            return {datas:action.value}
        default:
            return state
    }
}
export default UserId;