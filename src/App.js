import React, { useState } from "react";
import "./App.css";
import Content from './component/Content'

const center = {
  marginLeft:500,
  marginTop:100,
}

const App = () => {

  const [ resources , setResources ] =useState('todos');

  return (
    <div style={center}>
    <h1>React Hook Demo.</h1>
      <input type="radio" defaultChecked value="todos" name="resources" onChange={(e)=>setResources(e.target.value)} />todos
      <input type="radio" value="photos" name="resources" onChange={(e)=>setResources(e.target.value)}/>Photos
    
      <Content resoucres={resources} />
    </div>
   
  )
};

export default App;
