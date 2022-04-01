import './ProductPage.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {ProductCard} from './ProductCard'
export const ProductPage = () =>{

     const [products, setProducts] = useState([]);
     useEffect(()=>{
          getProducts();
     },[])
     const getProducts=()=>{
          axios.get(`http://localhost:4500/product`).then(({data})=>{
               // console.log(data)
               setProducts(data)
          })
     }
     const sortFunction =(e)=>{
          if(e.target.value==="price-low-to-high"){
               let arr = products.sort((a,b)=>a.price-b.price)
               setProducts([...arr])
               // console.log(arr)
          }else if(e.target.value==="price-high-to-low"){
               let arr = products.sort((a,b)=>b.price-a.price)
               setProducts([...arr])
               // console.log(arr)
          }else if(e.target.value==="popular"){
               let arr = products.filter((el)=>{
                    return el.popular === true;
               })
               setProducts([...arr])
               // console.log("popular")
          }else if(e.target.value==="new-arrival"){
               let arr = products.filter((el)=>{
                    return el.popular === false;
               })
               console.log(arr)
               setProducts([...arr])
          }
     }
     // console.log("products",products)
     return(
          <div className="ProductPage">
               <div className="ProductPage-Top">
                    <div className="ProductPage-Top-mb">MOUNTAIN BIKES</div>
                    <div className="ProductPage-Top-na">
                         <select onChange={sortFunction}  id="new-arrival">
                              <option value="new-arrival">NEW ARRIVAL</option>
                              <option value="price-low-to-high">PRICE LOW TO HIGH</option>
                              <option value="price-high-to-low">PRICE HIGH TO LOW</option>
                              <option value="popular">POPULAR</option>
                         </select>
                    </div>
               </div>
               <div className='ProductPage-Container'  >
                    {products.map((el)=>{
                         return <ProductCard data={el} key={el._id}></ProductCard>
                    })}
               </div>
          </div>
     )
}