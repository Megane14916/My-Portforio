import '../static/Blog.css'
import React, { useState, useMemo, useEffect, useRef  } from 'react';
import { blogList } from '../data/blogList'
import { BlogItem2 } from './BlogItem2';
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { FadeInUpOnLoad } from './FadeInUpOnLoad';

const TagButton = ({ tag, onClick, isSelected }) => (
  <button
    onClick={() => onClick(tag)}
    className={`tagButton ${isSelected ? 'selected': 'notSelected'}`}>
    {tag}
  </button>
);

export function Blog() {
    const [selectedTag, setSelectedTag] = useState('すべて');

    const handleTagClick = (tag) => {
      setSelectedTag(tag);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const allTags = useMemo(() => {
      const tags = new Set();
      blogList.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
      });
      return ['すべて', ...Array.from(tags).sort()];
    }, []);

    const filteredPosts = useMemo(() => {
      if (selectedTag === 'すべて') {
        return blogList;
    }
      return blogList.filter((post) => post.tags.includes(selectedTag));
    }, [selectedTag]);


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

    const text = "Blog";
    const speedOptions1 = { minSpeed: 60, maxSpeed: 120 };
    const { displayedText: displayedText1, isAnimationComplete: isAnimationComplete1 } = useTypingAnimation(text, speedOptions1, isVisible1);


    return(
        <div className='blog'>
            <div className="container" ref={targetRef1}><h1 className={`titleText blogPageTitle ${isAnimationComplete1 ? 'animation-done' : ''}`}>{displayedText1}</h1></div>

            <nav className="tagSec">
                {allTags.map((tag) => (
                    <FadeInUpOnLoad><TagButton key={tag} tag={tag} onClick={handleTagClick} isSelected={selectedTag === tag} /></FadeInUpOnLoad>
                ))}
            </nav>

            {filteredPosts.map((blog)=>(
                <FadeInUpOnLoad delay={(blogList.length-blog.id+1)*200}><BlogItem2 blog={blog} onClick={handleTagClick} key={blog.id} /></FadeInUpOnLoad>
            ))}
        </div>
    )
}