'use client';
import {useEffect} from 'react';
export default function MotionDirector(){
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop=window.matchMedia('(min-width: 768px)');
  const bar=document.querySelector<HTMLElement>('.lp-scroll-meter');
  const hero=document.querySelector<HTMLElement>('.lp-hero');
  const bg=[...document.querySelectorAll<HTMLElement>('.lp-hero-img')];
  const journey=[...document.querySelectorAll<HTMLElement>('.lp-story')];
  const statement=document.querySelector<HTMLElement>('.lp-statement');
  const ring=document.querySelector<HTMLElement>('.lp-ring');
  let raf=0,previous=-1;
  function paint(){
   raf=0;
   const y=window.scrollY;
   if(y===previous)return;
   previous=y;
   const range=Math.max(1,document.documentElement.scrollHeight-innerHeight);
   if(bar)bar.style.transform='scaleX('+Math.min(1,y/range)+')';
   if(reduced.matches)return;
   if(hero){const rect=hero.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight){const offset=Math.max(0,-rect.top);hero.style.setProperty('--hero-parallax',desktop.matches?Math.min(offset*.27,210)+'px':Math.min(offset*.1,70)+'px');hero.style.setProperty('--hero-text-shift',Math.min(offset*.12,90)+'px');}}
   if(desktop.matches){
    for(const card of journey){const rect=card.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight){const normalized=(rect.top+rect.height/2-innerHeight/2)/innerHeight;card.style.setProperty('--photo-shift',(normalized*-24).toFixed(1)+'px');}}
    if(statement&&ring){const rect=statement.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight){const fraction=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));ring.style.setProperty('--ring-rotation',(fraction*100-25).toFixed(1)+'deg');}}
   }
  }
  const update=()=>{if(!raf)raf=requestAnimationFrame(paint)};
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update,{passive:true});reduced.addEventListener('change',update);update();
  return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);reduced.removeEventListener('change',update);if(raf)cancelAnimationFrame(raf)};
 },[]);
 return <div className="lp-scroll-meter" aria-hidden="true"/>;
}
