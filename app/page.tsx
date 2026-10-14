'use client';
import {useEffect,useState} from 'react';
import {ArrowUpRight,ArrowRight,ArrowDown,Menu,X,MapPin,Check,ChevronLeft,ChevronRight,Compass} from 'lucide-react';
import Reveal from '../components/Reveal';
import MotionDirector from '../components/MotionDirector';

const stories=[
{number:'01',type:'EAT / DRINK',title:'Make a night of it.',line:'Restaurants & bars',image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85'},
{number:'02',type:'GET OUT / EXPLORE',title:'Do something different.',line:'Experiences & adventures',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=85'},
{number:'03',type:'REST / RESET',title:'Take a moment.',line:'Wellness & escapes',image:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85'}
];
export default function Home(){
 const [menu,setMenu]=useState(false);
 const [slide,setSlide]=useState(0);
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const listener=()=>setScrolled(window.scrollY>35);listener();window.addEventListener('scroll',listener,{passive:true});return()=>window.removeEventListener('scroll',listener)},[]);
 const hero=[
 {top:'LIVE MORE LOCAL.',bottom:'PAY LESS.',small:'THE GOLD COAST, UNLOCKED.',photo:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90'},
 {top:'SAY YES TO',bottom:'MORE DAYS OUT.',small:'THE GOOD STUFF IS CLOSER THAN YOU THINK.',photo:'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2200&q=90'},
 {top:'THE BEST DAYS',bottom:'AREN’T PLANNED.',small:'DISCOVER SOMETHING NEW.',photo:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90'}
 ];
 return <main className="lp"><MotionDirector/>
 <header className={scrolled?'lp-nav scrolled':'lp-nav'}>
 <a className="lp-logo" href="#top" aria-label="LocalPass home">locals<span>pass</span><i>●</i></a>
 <nav className={menu?'lp-links active':'lp-links'} aria-label="Main navigation">
 <a onClick={()=>setMenu(false)} href="#discover">Discover</a><a onClick={()=>setMenu(false)} href="#how">The idea</a><a onClick={()=>setMenu(false)} href="#passes">The passes</a><a onClick={()=>setMenu(false)} href="#partners">For businesses</a>
 </nav>
 <div className="lp-nav-right"><a href="#passes" className="lp-nav-button">GET LOCALPASS <ArrowUpRight size={17}/></a><button className="lp-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
 <section id="top" className="lp-hero">
 {hero.map((s,i)=><div className={slide===i?'lp-hero-img current':'lp-hero-img'} key={s.top} style={{backgroundImage:'url('+s.photo+')'}}/>)}
 <div className="lp-hero-filter"/>
 <div className="lp-hero-main">
 <div className="lp-kicker white"><span className="lp-kicker-dot"/> AUSTRALIA'S NEW WAY TO GET OUT</div>
 <div key={slide} className="lp-hero-words"><h1>{hero[slide].top}<br/><em>{hero[slide].bottom}</em></h1><p>{hero[slide].small}</p></div>
 <div className="lp-hero-ctas"><a href="#passes" className="lp-btn electric">FIND YOUR PASS <ArrowUpRight size={20}/></a><a href="#discover" className="lp-hero-simple">EXPLORE THE GOOD STUFF <ArrowDown size={19}/></a></div>
 </div>
 <div className="lp-hero-foot"><div className="lp-hero-location"><MapPin size={15}/> GOLD COAST · QUEENSLAND</div><div className="lp-hero-controls"><button aria-label="Previous feature" onClick={()=>setSlide((slide+2)%3)}><ChevronLeft size={19}/></button><span>0{slide+1} <b>/ 03</b></span><button aria-label="Next feature" onClick={()=>setSlide((slide+1)%3)}><ChevronRight size={19}/></button></div></div>
 </section>
 <section className="lp-strip" aria-label="LocalPass benefits"><div className="lp-strip-track">{Array.from({length:4},(_,i)=><span key={i}>THE COAST IS CALLING <b>✳</b> GOOD PLACES. BETTER PRICES. <b>✳</b> MAKE MORE MEMORIES <b>✳</b> </span>)}</div></section>
 <section className="lp-intro lp-container"><Reveal><span className="lp-section-no">01 / A BETTER WAY TO GO OUT</span><div className="lp-intro-grid"><h2>YOUR CITY.<br/><span>MORE REASONS</span><br/>TO LOVE IT.</h2><div className="lp-intro-side"><span className="lp-star">✳</span><p>Good food. Great experiences. Unexpected favourites. We’re making it easier to get out, try more and keep more in your pocket.</p><a href="#passes" className="lp-underlink">MEET YOUR NEW PASS <ArrowUpRight size={20}/></a></div></div></Reveal></section>
 <section id="discover" className="lp-discover lp-container">
 <Reveal><div className="lp-heading-row"><div><span className="lp-section-no">02 / NEVER A BORING DAY</span><h2>LESS SCROLLING.<br/><span>MORE LIVING.</span></h2></div><p>Whatever you’re into, there's always something good around the corner.</p></div></Reveal>
 <div className="lp-story-grid">{stories.map((s,i)=><Reveal key={s.number}><article className="lp-story"><div className="lp-story-photo" style={{backgroundImage:'url('+s.image+')'}}/><div className="lp-story-overlay"/><div className="lp-story-top"><span>{s.number} — {s.type}</span><span className="lp-story-arrow"><ArrowUpRight size={22}/></span></div><div className="lp-story-bottom"><small>{s.line}</small><h3>{s.title}</h3></div></article></Reveal>)}</div>
 <p className="lp-legal">Photography illustrates intended categories. These are not live offers or affiliated merchants.</p>
 </section>
 <section className="lp-statement"><div className="lp-container"><Reveal><span className="lp-section-no bright">THE ENTIRE POINT</span><div className="lp-statement-row"><h2>A LITTLE PASS.<br/><i>A LOT MORE LIFE.</i></h2><div className="lp-ring"><span>LOCALS<br/>PASS</span><ArrowUpRight size={43}/></div></div><p>From a spontaneous dinner to a whole new adventure. We believe your best days shouldn't come with a ridiculous price tag.</p></Reveal></div></section>
 <section id="how" className="lp-how lp-container"><Reveal><span className="lp-section-no">03 / MADE TO BE EASY</span><div className="lp-heading-row"><h2>THREE STEPS.<br/><span>THAT'S IT.</span></h2><p>No cutting coupons. No chasing promo codes. Just discover the good stuff and enjoy it.</p></div></Reveal><div className="lp-how-grid">{[
 ['01','CHOOSE YOUR PASS','Visiting for seven days or calling the Coast home? Pick the one that fits your life.'],
 ['02','FIND YOUR FAVOURITES','Browse participating businesses, experiences and member-only offers.'],
 ['03','SHOW UP. SAVE.','Once we launch, use your digital pass to redeem offers at participating venues.']
 ].map((s,i)=><Reveal key={s[0]}><article className="lp-how-card"><div className="lp-how-top"><span>{s[0]}</span><ArrowUpRight size={22}/></div><h3>{s[1]}</h3><p>{s[2]}</p></article></Reveal>)}</div></section>
 <section id="passes" className="lp-passes"><div className="lp-container"><Reveal><div className="lp-passes-heading"><span className="lp-section-no">04 / YOUR TICKET TO MORE</span><h2>BIG ON LIVING.<br/><span>SMALL ON PRICE.</span></h2><p>One little pass. Plenty of reasons to get out.</p></div></Reveal><div className="lp-pass-grid"><Reveal><article className="lp-pass tourist"><div className="lp-pass-head"><span>FOR THE EXPLORERS</span><Compass size={26}/></div><h3>JUST VISITING?</h3><div className="lp-pass-amount">$9<span>/ 7 DAYS</span></div><p>One week, one payment, and all the discoveries the Coast has to offer.</p><div className="lp-pass-rule"/><ul><li><Check size={18}/> One-off payment</li><li><Check size={18}/> Seven days from activation</li><li><Check size={18}/> Digital membership</li></ul><div className="lp-unavailable">COMING SOON <ArrowUpRight size={18}/></div></article></Reveal><Reveal><article className="lp-pass resident"><div className="lp-pass-corner">THE LOCAL FAVOURITE</div><div className="lp-pass-head"><span>FOR THE HERE-TO-STAY</span><MapPin size={26}/></div><h3>CALL IT HOME?</h3><div className="lp-pass-amount">$49<span>/ YEAR</span></div><p>Make the most of your own backyard, all year long.</p><div className="lp-pass-rule"/><ul><li><Check size={18}/> 12 months of access</li><li><Check size={18}/> Digital membership</li><li><Check size={18}/> Eligible locals-only offers</li></ul><div className="lp-unavailable resident-btn">COMING SOON <ArrowUpRight size={18}/></div></article></Reveal></div><p className="lp-pass-notice">PRE-LAUNCH PREVIEW. MEMBERSHIPS, PAYMENT AND REDEMPTIONS ARE NOT YET ACTIVE.</p></div></section>
 <section id="partners" className="lp-partners lp-container"><Reveal><div className="lp-partners-panel"><div className="lp-partners-content"><span className="lp-section-no">05 / GOOD BUSINESS</span><h2>YOUR NEXT<br/><span>REGULAR IS</span><br/>OUT THERE.</h2><p>We’re building a better way for Gold Coast businesses to connect with people who want to discover them. Merchant applications are coming soon.</p><span className="lp-partner-disabled">MERCHANT ENQUIRIES OPENING SOON <ArrowUpRight size={18}/></span></div><div className="lp-partners-art"><div className="lp-large-asterisk">✳</div><div className="lp-partners-card"><span>LOCALS<span style={{color:'#b7e46b'}}>PASS.</span></span><strong>GOOD<br/>THINGS<br/>HAPPEN.</strong><small>GOLD COAST / AUSTRALIA</small></div></div></div></Reveal></section>
 <footer className="lp-footer"><div className="lp-container"><div className="lp-footer-main"><div><a href="#top" className="lp-footer-logo">locals<span>pass</span><i>●</i></a><p>GET OUT. GET MORE. GET LOCAL.</p></div><div className="lp-footer-links"><a href="#discover">DISCOVER</a><a href="#how">HOW IT WORKS</a><a href="#passes">PASSES</a><a href="#partners">BUSINESSES</a></div></div><div className="lp-footer-foot"><span>© {new Date().getFullYear()} LOCALPASS · PRE-LAUNCH CONCEPT</span><span>BUILT FOR THE COAST. MADE TO GO EVERYWHERE.</span></div></div></footer>
 </main>;
}
