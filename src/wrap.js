import React from "react";
import { isArray } from "typetastic";

let uniqueId = 0;

export default function wrap(children, props){
  const isA = isArray(children);
  if (!isA){
    return React.cloneElement(children, props);
  }
  return children.map((child)=>{
    props.key = props.key || uniqueId++;
    return React.cloneElement(child, props)
  })

}