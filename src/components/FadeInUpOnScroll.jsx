import { useState, useEffect, useRef } from 'react';

        // Intersection Observer を使ったアニメーションコンポーネント
        export const FadeInUpOnScroll = ({ children, delay = 0 }) => {
            const [isVisible, setIsVisible] = useState(false);
            const targetRef = useRef(null);

            useEffect(() => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        // isIntersectingがtrueなら画面内に入ったと判定
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                            // 一度表示したら監視を停止して、パフォーマンスを向上
                            observer.unobserve(entry.target);
                        }
                    },
                    {
                        // どのくらい要素が見えたらトリガーするか (0.1 = 10%)
                        threshold: 0.1,
                    }
                );

                const currentElement = targetRef.current;
                if (currentElement) {
                    observer.observe(currentElement);
                }

                // クリーンアップ関数
                return () => {
                    if (currentElement) {
                        observer.unobserve(currentElement);
                    }
                };
            }, []);

            return (
                <div 
                    ref={targetRef} 
                    className={`fade-in-up-element ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${delay}ms` }}
                >
                    {children}
                </div>
            );
        };