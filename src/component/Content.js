import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Content(props) {
  console.log(props, "props");
  const [ data,setData ] =useState(null);

  useEffect(()=>{
    console.log("useEffect")
    //componetDidmount and componentDidUpdate;
   axios.get(`https://jsonplaceholder.typicode.com/${props.resoucres}`).then(({data})=>{
      console.log(data.slice(10),"data")
      setData(data)
    });
   
  })
  return (
    <div>
      <h1>Content component</h1>
      <div>
        <pre>{JSON.stringify(data,null,4)}</pre>
        {/* second parameter is an replacer which defines how to stringify object
        it may be functin as well
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify */}
      </div>
    </div>
  );
}


//Desing Patter:
// 1.Children  as a design pattern