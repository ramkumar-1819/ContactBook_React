//This reducer actually hold the initial datas from the API that we fetched initially 
export default function InitialData(state=[],action){
    switch(action.type){
        case "InitialDatas":
            return action.datas
        default:
            return state
    }
}