import { useState, useEffect } from 'react';

export const FadeInUpOnLoad = ({ children, delay = 0 }) => {
            const [isVisible, setIsVisible] = useState(false);

            useEffect(() => {
                // コンポーネントがマウントされたらアニメーションを開始
                const timer = setTimeout(() => setIsVisible(true), 100); // 確実なトリガーのためわずかに遅延
                return () => clearTimeout(timer);
            }, []); // 空の依存配列で、マウント時に一度だけ実行

            return (
                <div 
                    className={`fade-in-up-element ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${delay}ms` }}
                >
                    {children}
                </div>
            );
        };