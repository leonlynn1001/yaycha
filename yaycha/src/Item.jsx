/* eslint-disable react/prop-types */


const Item = ({item,remove}) => {
  return (
    <li style={{padding:"10px",borderBottom:"1px solid #ddd",display:"flex",justifyContent:"space-between"}}>
    <span>{item.content} <b>{item.name}</b></span>
    <button onClick={()=>remove(item.id)}>Delete</button>
   </li>
  )
}

export default Item