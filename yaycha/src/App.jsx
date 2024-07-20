/* eslint-disable no-unused-vars */
import { useState,useContext } from "react"
import Item from "./Item"
import List from "./List"
import Form from "./Form"
import { AppContext } from "./ThemedApp"

function App() {
  const {mode,setMode} = useContext(AppContext)
 
  const [data,setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);
  const [showForm, setShowForm] = useState(false);
  function remove(id){
    setData(data.filter(item=>item.id!==id))
    }
  function add(content,name){
    const newDataId= (data.length-1).id+1;
    setData([...data,{newDataId,content,name}])
  }

  return (
    <div style={{
      minHeight:1500,
      paddingTop:20,
      background:mode==="dark"?"black":"white",
      color:mode==="dark"?"white":"black"
    }}>
    <div style={{maxWidth:600,margin:"20px auto"}}>
      <h1 style={
        {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin: "0 0 20px 0",}
        }>Yay Cha
        <button
        onClick={()=>setShowForm(!showForm)}
        style={{
          width:32,
          height:32,
          border:"0 none",
          borderRadius:50,
          background:showForm ? "#dc3545" : "#0d6efd",
        }}>
          {showForm?"x":"+"}
        </button>
        <button 
        onClick={()=>setMode(mode==="dark"?"Light":"dark")}
        style={{
          marginLeft: 8,
          padding: "0 20px",
          height: 32,
          borderRadius: 32,
          border: "0 none",
          background: mode === "dark" ? "#333" : "#ddd",
          color: mode === "dark" ? "white" : "black",
        }}>{mode==="dark"?"Light":"Black"}</button>
        </h1>
      {showForm && <Form add={add}/>}
    <List>
    {
      data.map(item=>(
        <Item item={item} key={item.id} remove={remove}/>
      ))
    }
    </List>
      
    </div>
    </div>
  )
}

export default App
