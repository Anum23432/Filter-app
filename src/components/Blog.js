import React, {useState} from "react";
import Card from "./Card";
import data from "./Data";
import logo1 from './assets/ap1.jpg';
import logo2 from './assets/ap5.jpg';
import logo3 from './assets/ap7.jpg';
import logo4 from './assets/ap2.jpg';
import logo5 from './assets/all.jpg';



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
    <br/><br/><br/>
    <div className="picture">   
    <img className="pic" src={logo1} onClick={() => {filterItem('Apple')}}/>
    <img className="pic" src={logo2} onClick={() => {filterItem('Huawei')}}/><br/>
    <img className="pic" src={logo3} onClick={() => {filterItem('Oppo')}}/>
    <img className="pic" src={logo4} onClick={() => {filterItem('Samsung')}}/>
    <img className="pic" src={logo5} onClick={() => {setDataItems(data)}}/>

    </div>

​
    <section className='container py-4 py-lg-5'>
        <div className= 'row justify-content-center' >
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
