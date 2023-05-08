import React from 'react';
import { Header } from './Header';
import  Counter from './Counter';

export default function () {
  const name = 'John';
  return ( 
    <>
    <Header name={name} apellido='Perez' /> 
    <p> React es fino</p>
    <p>Mi sankalpa</p>
    <Counter /> 
    </>
    );
}
