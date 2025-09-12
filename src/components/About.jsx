import '../static/About.css'
import '../static/Home.css'
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { styles, Tooltip } from "../components/Tooltip";
import { FadeInUpOnScroll } from "./FadeInUpOnScroll"
import { useState, useEffect, useRef } from 'react';


export function About() {

    const targetRef1 = useRef(null);
        const [isVisible1, setIsVisible1] = useState(false);
        const targetRef2 = useRef(null);
        const [isVisible2, setIsVisible2] = useState(false);
        const targetRef3 = useRef(null);
        const [isVisible3, setIsVisible3] = useState(false);
    
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

    // useEffect内でrefの現在の値をローカル変数にコピー
    const currentRef1 = targetRef1.current;
    const currentRef2 = targetRef2.current;
    const currentRef3 = targetRef3.current;

    if (currentRef1) observer1.observe(currentRef1);
    if (currentRef2) observer2.observe(currentRef2);
    if (currentRef3) observer3.observe(currentRef3);

    // クリーンアップ関数ではローカル変数を使用する
    return () => {
      if (currentRef1) observer1.unobserve(currentRef1);
      if (currentRef2) observer2.unobserve(currentRef2);
      if (currentRef3) observer3.unobserve(currentRef3);
    };
    }, []);

    const text1 = "About me";
    const speedOptions1 = { minSpeed: 60, maxSpeed: 120 };
    const { displayedText: displayedText1, isAnimationComplete: isAnimationComplete1 } = useTypingAnimation(text1, speedOptions1 ,isVisible1);

    const text2 = "Skill Set";
    const speedOptions2 = { minSpeed: 60, maxSpeed: 120 };
    const { displayedText: displayedText2, isAnimationComplete: isAnimationComplete2 } = useTypingAnimation(text2, speedOptions2, isVisible2);

    const text3 = "Hobby";
    const speedOptions3 = { minSpeed: 60, maxSpeed: 120 };
    const { displayedText: displayedText3, isAnimationComplete: isAnimationComplete3 } = useTypingAnimation(text3, speedOptions3 ,isVisible3);

    return(
        <div className='about'>
            <div className="container" ref={targetRef1}><h1 className={`titleText about-title2 ${isAnimationComplete1 ? 'animation-done' : ''}`}>{displayedText1}</h1></div>
            <FadeInUpOnScroll delay={300}><p className='aboutPageText'>私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は私の名前は</p></FadeInUpOnScroll>
            <div className="container" ref={targetRef2}><h1 className={`titleText about-title4 ${isAnimationComplete2 ? 'animation-done' : ''}`}>{displayedText2}</h1></div>
            <FadeInUpOnScroll delay={300}><p className='takusan'>たくさん載せたけど、全部完璧にできるとは言ってない</p></FadeInUpOnScroll>
            <style>{styles}</style>
            <div className='skillSet'>
                <Tooltip text="できる"><FadeInUpOnScroll delay={300}><div className='skill green'><i class="devicon-html5-plain colored"></i><p className='skillText'>HTML</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="できる"><FadeInUpOnScroll delay={400}><div className='skill green'><i class="devicon-css3-plain colored"></i><p className='skillText'>CSS</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="はやく習得したほうがいいと思っている"><FadeInUpOnScroll delay={500}><div className='skill red'><i class="devicon-tailwindcss-original colored"></i><p className='skillText'>Tailwind CSS</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="むずい。勉強中"><FadeInUpOnScroll delay={600}><div className='skill'><i class="devicon-javascript-plain colored"></i><p className='skillText'>JavaScript</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="ちょっと触っただけ"><FadeInUpOnScroll delay={700}><div className='skill red'><i class="devicon-nodejs-plain colored"></i><p className='skillText'>Node.js</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="基本的なことはできる。勉強中"><FadeInUpOnScroll delay={800}><div className='skill'><i class="devicon-react-original colored"></i><p className='skillText'>React</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="ちょっと触っただけ。勉強中"><FadeInUpOnScroll delay={900}><div className='skill red'><i class="devicon-nextjs-plain colored"></i><p className='skillText'>Next.js</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="基礎文法だけ"><FadeInUpOnScroll delay={1000}><div className='skill'><i class="devicon-python-plain colored"></i><p className='skillText'>Python</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="簡単なアプリが作れるくらい"><FadeInUpOnScroll delay={1100}><div className='skill'><i class="devicon-flask-original colored"></i><p className='skillText'>Flask</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="勉強したいと思っている"><FadeInUpOnScroll delay={1200}><div className='skill red'><i class="devicon-django-plain colored"></i><p className='skillText'>Django</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="簡単な操作ができるだけ"><FadeInUpOnScroll delay={1300}><div className='skill'><i class="devicon-sqlite-plain colored"></i><p className='skillText'>SQLite</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="超基礎だけ"><FadeInUpOnScroll delay={1400}><div className='skill red'><i class="devicon-cplusplus-plain colored"></i><p className='skillText'>C++</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="勉強したいと思っている"><FadeInUpOnScroll delay={1500}><div className='skill red'><i class="devicon-mysql-original colored"></i><p className='skillText'>MySQL</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="簡単な操作ができるだけ"><FadeInUpOnScroll delay={1600}><div className='skill'><i class="devicon-git-plain colored"></i><p className='skillText'>git</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="聞いたことある"><FadeInUpOnScroll delay={1700}><div className='skill red'><i class="devicon-docker-plain colored"></i><p className='skillText'>Docker</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="サイトを公開できるだけ"><FadeInUpOnScroll delay={1800}><div className='skill'><i class="devicon-vercel-original colored"></i><p className='skillText'>Vercel</p></div></FadeInUpOnScroll></Tooltip>
                <Tooltip text="いつか学びたい"><FadeInUpOnScroll delay={1900}><div className='skill red'><i class="devicon-amazonwebservices-plain-wordmark colored"></i><p className='skillText'>AWS</p></div></FadeInUpOnScroll></Tooltip>
            </div>
            <div className="container" ref={targetRef3}><h1 className={`titleText about-title3 ${isAnimationComplete3 ? 'animation-done' : ''}`}>{displayedText3}</h1></div>
            <FadeInUpOnScroll delay={300}><p>将棋</p></FadeInUpOnScroll>
        </div>
    )
}