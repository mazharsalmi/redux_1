import React ,{  useContext} from 'react'
import noteContext from '../context/notes/NoteContext'
import './Home.css'
export default function Home() {
    const products =useContext(noteContext);
    const handleAdd =(product)=>{

      console.log('Hello')
  
     }
  return (
    <div className='products'> 
    {products.map(product =>(
        <div className='card' key={product.id}>
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h6>{product.price}</h6>
        <button className='btn' onClick={()=> handleAdd(product)}> Add To Cart</button>
         </div>
        ))}
    </div>
  )
}
