/* eslint-disable react/prop-types */


const List = ({children}) => {
  return (
   <ul style={{
    listStyle:"none",
    padding:0,
    margin:0,
    borderBottom:"1px solid #ddd",
    borderRadius:8,
    overflow:"hidden"
   }}>
    {children}
   </ul>
  )
}

export default List