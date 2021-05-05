import axios from 'axios';

//This action is used for Authentication purpose and it gives all the datas from the API 
//Using this datas only we checking if the user is existing or new
export const dataFetching=()=>(dispatch)=>{       
    axios.get("https://60850e379b2bed001704180e.mockapi.io/Ram")
        .then(res=>{
            dispatch({type:"Success",data:res.data})
        })
        .catch(err=>{
            dispatch({type:"Failure"})
        })
}
//This Action is usually store the id that we got from API
export const fetchParticularData=(val)=>(dispatch)=>{
        dispatch({type:"Fetched",value:val})
}
//This Action usually store the datas based on the id 
export const fetchUserContact=()=>(dispatch)=>{
    axios.get(`https://60850e379b2bed001704180e.mockapi.io/Ram/${sessionStorage.getItem("id")}`)
        .then(res=>{
            var Userdatas=[];
            res.data.datas.forEach(val=>{
                Userdatas.push(val)
            })
            dispatch({type:"InitialDatas",datas:Userdatas})
            dispatch({type:"Contact",values:res.data.datas})
        })
        .catch(err=>{
            console.log(err)
        })
}
