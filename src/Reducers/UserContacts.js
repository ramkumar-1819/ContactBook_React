//This reducer hold the Current Contact Datas of the User
export default function UserContact(state=[],action){
    switch(action.type){
        case "Contact":
            return action.values;             
        default:
            return state
    }
}