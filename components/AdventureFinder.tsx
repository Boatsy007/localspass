'use client';
import {useState} from 'react';
import {ArrowUpRight,Shuffle,Sparkles,MapPin,ArrowRight} from 'lucide-react';
const adventures=[
 {mood:'Eat',eyebrow:'GOOD FOOD. GREAT COMPANY.',title:'Turn tonight into a story.',description:'Think long lunches, sunset drinks and finding a new favourite table.',image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1300&q=85',color:'#ff7453',icon:'🍽'},
 {mood:'Play',eyebrow:'LET THE GOOD TIMES ROLL.',title:'Make ordinary days extraordinary.',description:'The next adventure is closer than you think. Make room for something new.',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1300&q=85',color:'#ffd14b',icon:'✳'},
 {mood:'Explore',eyebrow:'GO SOMEWHERE DIFFERENT.',title:'There’s more around the corner.',description:'New perspectives, unexpected discoveries and a little fresh air.',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1300&q=85',color:'#b4a2f6',icon:'↗'},
 {mood:'Unwind',eyebrow:'TAKE THE DAY OFF.',title:'Go ahead. Treat yourself.',description:'Slow down, recharge and enjoy the kinds of moments you wish lasted longer.',image:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1300&q=85',color:'#8ae4e2',icon:'☀'}
];
export default function AdventureFinder(){
 const [active,setActive]=useState(0);
 const [visits,setVisits]=useState(0);
 const item=adventures[active];
 const select=(i:number)=>{setActive(i);setVisits(v=>v+1)};
 return <section className="lp-adventure" aria-labelledby="lp-adventure-title">
 <div className="lp-container">
 <div className="lp-adventure-head"><div><span className="lp-section-no">✦ YOUR NEXT GOOD DAY STARTS HERE</span><h2 id="lp-adventure-title">WHAT'S YOUR <em>VIBE?</em></h2></div><p>Pick your mood. We'll set the scene. Real participating offers are coming soon.</p></div>
 <div className="lp-moods" role="group" aria-label="Choose an experience category">{adventures.map((a,i)=><button key={a.mood} className={i===active?'lp-mood selected':'lp-mood'} onClick={()=>select(i)} type="button" aria-pressed={i===active}><span>{a.icon}</span>{a.mood}<ArrowUpRight size={16}/></button>)}</div>
 <div className="lp-adventure-stage" style={{'--adventure-accent':item.color} as React.CSSProperties}>
 <div className="lp-adventure-media" key={'img'+active+'-'+visits} style={{backgroundImage:'linear-gradient(90deg,rgba(15,27,51,.1),rgba(15,27,51,.1)),url('+item.image+')'}}/>
 <div className="lp-adventure-information" key={'text'+active+'-'+visits}>
 <span className="lp-adventure-eyebrow"><Sparkles size={17}/> {item.eyebrow}</span>
 <h3>{item.title}</h3><p>{item.description}</p>
 <a className="lp-adventure-link" href="#passes">YOUR PASS TO MORE <ArrowUpRight size={20}/></a>
 <div className="lp-adventure-caption"><MapPin size={14}/> GOLD COAST · CATEGORY PREVIEW</div>
 </div>
 <span className="lp-adventure-big-number">0{active+1} / 04</span>
 </div>
 <div className="lp-adventure-bottom"><span>THE BEST PLANS START WITH A LITTLE CURIOSITY.</span><button onClick={()=>select((active+1)%adventures.length)} type="button"><Shuffle size={17}/> SURPRISE ME <ArrowRight size={17}/></button></div>
 </div>
 </section>;
}
