import React, {useState} from "react";
import Card from "./Card";
import data from "./Data";



function Blog() {
    const[dataItems, setDataItems]= useState(data);
   
    const filterItem = (categoryItem) =>{
        const updatedItem = data.filter((currentElement) =>{
            console.log(currentElement)
            return currentElement.category === categoryItem;
    });
         
    console.log(updatedItem);
          setDataItems(updatedItem);
        }
       
    return(
    <>
    <h2>Blog page </h2>
    <button onClick={() => {filterItem('Samsung')}}> Samsung</button>
    <button onClick={() => {filterItem('Apple')}}> Apple</button>
    <button onClick={() => {filterItem('Oppo')}}> Oppo</button>
    <button onClick={() => {filterItem('Huawei')}}> Huawei</button>
    <button onClick={() => {setDataItems(data)}}> All</button>
​
    <section className='container py-4 py-lg-5'>
        <div className= 'row justify-content-center'>
            {dataItems.map((item, index)=>{
                return(<Card key={index} model={item.model} picture={item.picture} category={item.category} link={`/details/${item.id}`} />)
            })}
            
​
        </div>
    </section>
    </>
    );
  }

export default Blog;
