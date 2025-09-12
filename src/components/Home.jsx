import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { WorkItem } from "./WorkItem"
import { BlogItem } from "./BlogItem"
import { FadeInUpOnScroll } from "./FadeInUpOnScroll"
import { workList } from "../data/workList";
import { blogList } from "../data/blogList";
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { useJapaneseTypingAnimation } from "../hooks/useJapaneseTypingAnimation";
import { textSegments1 } from "../data/textSegments1";
import '../static/Home.css'


export function Home() {

    const latestWorkList = [workList[0],workList[1]]
    const latestBlogList = [blogList[0],blogList[1],blogList[2]]

    const targetRef1 = useRef(null);
    const [isVisible1, setIsVisible1] = useState(false);
    const targetRef2 = useRef(null);
    const [isVisible2, setIsVisible2] = useState(false);
    const targetRef3 = useRef(null);
    const [isVisible3, setIsVisible3] = useState(false);
    const targetRef4 = useRef(null);
    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    // setterを引数にとり、IntersectionObserverのインスタンスを返すファクトリ関数
    const createObserver = (setter) => {
      // コールバックは第2引数としてobserverインスタンス自身を受け取る
      return new IntersectionObserver(([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setter(true);
          // 第2引数で受け取ったobserverインスタンスを使って監視を停止
          observerInstance.unobserve(entry.target);
        }
      }, observerOptions);
    };

    const observer1 = createObserver(setIsVisible1);
    const observer2 = createObserver(setIsVisible2);
    const observer3 = createObserver(setIsVisible3);
    const observer4 = createObserver(setIsVisible4);

    // useEffect内でrefの現在の値をローカル変数にコピー
    const currentRef1 = targetRef1.current;
    const currentRef2 = targetRef2.current;
    const currentRef3 = targetRef3.current;
    const currentRef4 = targetRef4.current;

    if (currentRef1) observer1.observe(currentRef1);
    if (currentRef2) observer2.observe(currentRef2);
    if (currentRef3) observer3.observe(currentRef3);
    if (currentRef4) observer4.observe(currentRef4);

    // クリーンアップ関数ではローカル変数を使用する
    return () => {
      if (currentRef1) observer1.unobserve(currentRef1);
      if (currentRef2) observer2.unobserve(currentRef2);
      if (currentRef3) observer3.unobserve(currentRef3);
      if (currentRef4) observer4.unobserve(currentRef4);
    };
  }, []);

    const text = "Hello, I'm yoanz.";
    const text2 = "Works";
    const text3 = "Blog";
    const speedOptions1 = { minSpeed: 60, maxSpeed: 120 };
    const { displayedText: displayedText1, isAnimationComplete: isAnimationComplete1 } = useTypingAnimation(text, speedOptions1, isVisible1);
    const { displayedText: displayedText2, isAnimationComplete: isAnimationComplete2 } = useTypingAnimation(text2, speedOptions1, isVisible2);
    const { displayedText: displayedText3, isAnimationComplete: isAnimationComplete3 } = useTypingAnimation(text3, speedOptions1, isVisible3);

    const options1 = {
        typingSpeed: { min: 25, max: 50 },
        conversionDelay: 20,
    };
    const anim1 = useJapaneseTypingAnimation(textSegments1, options1, isVisible4);

    return (
        <div className='home'>
            <div className="about-sec">
                <div className="about-sec-2">
                    <div className="container" ref={targetRef1}><h1 className={`title ${isAnimationComplete1 ? 'animation-done' : ''}`}>{displayedText1}</h1></div>
                    <div className="container" ref={targetRef4}><p className={`titleText ${anim1.isAnimationComplete ? 'animation-done' : ''}`}>
                    {anim1.finalText}
                    <span className={anim1.isConverting ? 'ime-active' : ''}>{anim1.activeText}</span>
                    </p></div>
                    <div className="button-sec">
                        <FadeInUpOnScroll delay={400}><Link to="/works" className="button1">View Works</Link></FadeInUpOnScroll>
                        <FadeInUpOnScroll delay={700}><Link to="/about" className="button2">About me</Link></FadeInUpOnScroll>
                    </div>
                </div>
            </div>
            
            <div className="works-sec">
                <div className="container" ref={targetRef2}><h1 className={`titleText workTitle ${isAnimationComplete2 ? 'animation-done' : ''}`}>{displayedText2}</h1></div>
                <div className="workItemList">
                    {latestWorkList.map((work)=>(
                        <FadeInUpOnScroll key={work.id} delay={(workList.length-work.id)*300}><WorkItem  work={work} /></FadeInUpOnScroll>
                    ))}
                </div>
                <div className="viewALLWorksButton"><Link to="/works" className="button3">View All Works</Link></div>
            </div>

            <div className="blog-sec">
                <div className="container" ref={targetRef3}><h1 className={`titleText blogTitle ${isAnimationComplete3 ? 'animation-done' : ''}`}>{displayedText3}</h1></div>
                <div className="blogItemList">
                    {latestBlogList.map((blog)=>(
                        <FadeInUpOnScroll key={blog.id} delay={(blogList.length-blog.id)*100}><BlogItem blog={blog} id="blogitem" /></FadeInUpOnScroll>
                    ))}
                </div>
                <div className="viewALLWorksButton"><Link to="/blog" className="button3">View All Posts</Link></div>
            </div>
        </div>
    );
}