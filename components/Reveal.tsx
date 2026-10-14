'use client';
import { useEffect, useRef, type ReactNode } from 'react';
export default function Reveal({children}:{children:ReactNode}) {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add('visible');observer.unobserve(el)}},{threshold:.09});observer.observe(el);return()=>observer.disconnect()},[]);
 return <div ref={ref} className="scroll-reveal">{children}</div>;
}
