/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef,useContext} from "react";
import { AppContext } from "./ThemedApp";
function Form({add}) {
    const {mode} =  useContext(AppContext);
    const contentRef = useRef();
    const nameRef = useRef();
  return (
   <form style={{
    display:"flex",
    flexDirection:"column",
    gap:3,
    padding:10,
    marginBottom:20,
    borderRadius:8,
    background: mode === "dark" ? "#555" : "#def",
   
   }}
   onSubmit={e=>{
    e.preventDefault();
    const content = contentRef.current.value;
    const name = nameRef.current.value;
    add(content,name);
    e.currentTarget.reset();
   }}>
    <input type="text" ref={contentRef} placeholder="Content" style={{padding:5}}/>
    <input type="text" ref={nameRef} placeholder="Name" style={{padding:5}}/>
    <button type="submit" style={{
        padding:8,
        border:"0 none",
        background:"#0d6efd",
        color:"white"
    }}> 
        Post</button>
   </form>
  )
}

export default Form