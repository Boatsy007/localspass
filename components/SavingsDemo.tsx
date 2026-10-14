'use client';
import { useEffect,useState } from 'react';
const examples=[{name:'A day out',price:120,rate:20},{name:'Dinner for two',price:90,rate:15},{name:'Weekend experience',price:200,rate:20}];
export default function SavingsDemo(){
 const [active,setActive]=useState(0);
 useEffect(()=>{const timer=setInterval(()=>setActive(current=>(current+1)%examples.length),4200);return()=>clearInterval(timer)},[]);
 const example=examples[active],saving=example.price*example.rate/100;
 return <div className="savings-widget">
 <div className="widget-heading"><strong>local<span>pass.</span></strong><span>EXAMPLE ONLY</span></div>
 <div className="widget-content" key={active}>
 <div className="widget-label">ILLUSTRATIVE MEMBER SAVINGS</div>
 <h3>{example.name}</h3><div className="widget-price">${example.price.toFixed(2)} <small>example full price</small></div>
 <div className="widget-line"><span>Hypothetical discount ({example.rate}%)</span><b>−${saving.toFixed(2)}</b></div>
 <div className="widget-saved"><span>YOU COULD SAVE*</span><strong>${saving.toFixed(2)}</strong></div>
 </div>
 <div className="widget-pagination">{examples.map((item,index)=><button type="button" aria-label={'View savings example '+(index+1)} aria-pressed={active===index} className={index===active?'selected':''} key={item.name} onClick={()=>setActive(index)} />)}</div>
 </div>;
}
