import React from 'react';

export function Header(props) {
  let reloj1 = Date().toLocaleString();
  setInterval(() =>{
    reloj1 = Date().toLocaleString();
  },1000);
  return <h1 className="orange"> Hello {props.name} {props.apellido} {reloj1} </h1> ;
}
