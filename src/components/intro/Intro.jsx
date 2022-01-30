import "./intro.scss";
import { init } from 'ityped'
import { useEffect,useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Third yearite Student', 'Fast-Learner', "Machine Learning Enthusiast" ] })

  },[])
  return <div className='intro' id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="assets/pro_pic.jpg" alt=""/>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hello everyone, I'm</h2>
        <h1>Saman Sarker Joy</h1>
        <h3>A <span ref={textRef}></span></h3>
      </div>
      <a href="#education">
        <img src="assets/darrow.png" alt="" />
      </a>
    </div>
  </div>
}
