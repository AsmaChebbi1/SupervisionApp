import React,{useState, useEffect} from 'react'
import axios from 'axios'
function NormalFetching(){
    const [nodes,setNodes] = useState([])
    useEffect(()=> {
axios.get('http://localhost:4000/api/nodes')
.then(res => {
    console.log(res)
    setNodes(res.data)
})
  .catch(error => {
    console.log(error)
})
    },[])
    return(
       <div>
 <ul>{nodes.map(node => <li key={node.id}>{node.lieu}</li>)}</ul>
 </div>   

    )
}
export default  NormalFetching