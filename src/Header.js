import React from 'react';

export function Header(props) {
  let [reloj, setClock] = React.useState(Date().toLocaleString());
  setInterval(() => {
    setClock(Date().toLocaleString());
  }, 1000);
  return <h1 className="orange"> Hello {props.name} {props.apellido} {reloj} </h1> ;
}
