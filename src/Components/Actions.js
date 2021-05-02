import axios from 'axios';

export const dataFetching=()=>(dispatch)=>{
    axios.get("https://60850e379b2bed001704180e.mockapi.io/Ram")
        .then(res=>{
            dispatch({type:"Success",data:res.data})
        })
        .catch(err=>{
            dispatch({type:"Failure"})
        })
}

export const fetchParticularData=(val)=>(dispatch)=>{
        dispatch({type:"Fetched",value:val})
}