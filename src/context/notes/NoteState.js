import React from "react";
 import NoteContext from "./NoteContext";
  import { useState , useEffect } from "react";
 const NoteState =(props)=>{
    const [products ,setProducts] =useState([]);
   useEffect(()=>{
    const fetchProducts =async () =>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
    }
    fetchProducts();
    

   },[]);

    return(
        <NoteContext.Provider value ={products}>
            {props.children}
        </NoteContext.Provider>
    )
 }
 export default NoteState;