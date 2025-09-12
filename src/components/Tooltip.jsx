import React, { useState } from 'react';

export const styles = `
    .tooltip-wrapper {
        position: relative;
        display: inline-block;
    }
    .tooltip-box {
        position: fixed;
        padding: 6px 12px;
        font-size: 14px;
        color: white;
        background-color: #2d3748;
        border-radius: 6px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        white-space: nowrap;
        z-index: 10;
        pointer-events: none; /* ツールチップがマウスイベントを妨げないようにする */
        transition: opacity 200ms ease-in-out;
        opacity: 0; /* デフォルトで非表示 */
    }
    .tooltip-box.visible {
        opacity: 1; /* visibleクラスが付与されたら表示 */
    }
`;

// 再利用可能なTooltipコンポーネント
export const Tooltip = ({ children, text }) => {
    // ツールチップの表示状態を管理するstate
    const [isVisible, setIsVisible] = useState(false);
    // ツールチップの位置（座標）を管理するstate
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // マウスが要素上に入ったときの処理
    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    // マウスが要素上を移動したときの処理
    const handleMouseMove = (e) => {
        // ツールチップをマウスカーソルの少し上に表示するためのオフセット
        const offsetX = 10;
        const offsetY = -40;
        // position:fixed には、ページ全体の座標(pageX/Y)ではなく、
        // 表示領域(viewport)基準の座標(clientX/Y)を使用する
        setPosition({ x: e.clientX + offsetX, y: e.clientY + offsetY });
    };

    // マウスが要素から離れたときの処理
    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        // ツールチップを適用したい要素をラップするdiv
        <div
            className="tooltip-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* 子要素（ボタンなど）をレンダリング */}
            {children}
            
            {/* isVisibleの状態に応じて 'visible' クラスを付け外しする */}
            <div
                className={`tooltip-box ${isVisible ? 'visible' : ''}`}
                // stateで管理している座標をstyleに適用
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                {text}
            </div>
        </div>
    );
};