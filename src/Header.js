import React from 'react';

export function Header(props) {
  let reloj = Date().toLocaleString();
  setInterval(() =>{
    reloj = Date().toLocaleString();
  },1000);
  return <h1 className="orange"> Hello {props.name} {props.apellido} {reloj} </h1> ;
}
