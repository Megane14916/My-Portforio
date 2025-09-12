import '../static/Works.css'
import { workList } from '../data/workList'
import { useState, useEffect, useRef } from 'react';
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { WorkItem2 } from "./WorkItem2"
import { FadeInUpOnLoad } from './FadeInUpOnLoad';

export function Works() {

    const targetRef1 = useRef(null);
    const [isVisible1, setIsVisible1] = useState(false);
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
    // useEffect内でrefの現在の値をローカル変数にコピー
    const currentRef1 = targetRef1.current;
    if (currentRef1) observer1.observe(currentRef1);
    // クリーンアップ関数ではローカル変数を使用する
    return () => {
      if (currentRef1) observer1.unobserve(currentRef1);
    };
  }, []);

    const text = "Works";
    const speedOptions1 = { minSpeed: 60, maxSpeed: 120 };
    const { displayedText: displayedText1, isAnimationComplete: isAnimationComplete1 } = useTypingAnimation(text, speedOptions1, isVisible1);
    return(
        <div className='Works'>
            <div className="container" ref={targetRef1}><h1 className={`titleText ${isAnimationComplete1 ? 'animation-done' : ''}`}>{displayedText1}</h1></div>
            {workList.map((work)=>(
                <FadeInUpOnLoad delay={ (workList.length-work.id)*200}><WorkItem2 work={work} key={work} /></FadeInUpOnLoad>
            ))}
        </div>    
    )
}