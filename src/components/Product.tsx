import React, {useState} from 'react'
import {IProduct} from '../models'

interface ProductProps {
  product: IProduct //one parameter
}

         //as parameter we take props -any//export function Product(props: any) {
  export function Product({product}: ProductProps) {
               //console.log(props) //instead props and dont repeat can use {product}
  const[details, setDetails]= useState(false)

  const btnBgClassName = details ? 'bg-blue-300' : 'bg-yellow-300'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
    >
      <img src ={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
       className={btnClasses.join(' ')}
       onClick={() => setDetails(prev => !prev)}
        //предыдущее состояние меняем на противоположное вместо true
      >
        {details ? 'Hide Details' : 'Show Details'}
        </button>
             
        

          {details && <div>
             <p>{product.description}</p> 
             <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
             </div>}   
      
    </div>
  )
}
function initialState(initialState: any, arg1: boolean): [any, any] {
  throw new Error('Function not implemented.')
}

