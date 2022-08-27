import React ,{  useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

export default function About() {
  const products =useContext(noteContext);
  return (
    <div className='products'> 
    {products.map(product =>(
        <div className='card' key={product.id}>
               <h4>{product.id}</h4>
               <img src={product.image} alt="" />
          </div>
        ))}
    </div>
  )
}
