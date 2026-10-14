'use client';
import {useEffect,useRef,type ReactNode} from 'react';
export default function Reveal({children}:{children:ReactNode}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const el=ref.current;if(!el)return;
  if(!('IntersectionObserver' in window)){el.classList.add('visible');return}
  const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add('visible');observer.unobserve(el)}},{threshold:.08,rootMargin:'0px 0px -35px 0px'});
  observer.observe(el);
  return()=>observer.disconnect();
 },[]);
 return <div ref={ref} className="scroll-reveal">{children}</div>;
}
