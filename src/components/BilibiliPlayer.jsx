// src/components/BilibiliPlayer.jsx
import React, { useState } from 'react';

// 视频播放器组件
export const BilibiliPlayer = ({ bvid }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 拼接B站播放器地址
  const videoUrl = `https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=false&high_quality=1`;

  return (
    <div style={{ 
      margin: '20px 0',
      border: '1px solid #e3e3e3',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        padding: '12px 16px',
        background: '#f5f5f5',
        borderBottom: '1px solid #e3e3e3',
        display: 'flex',
        alignItems: 'center'
      }}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            flex: 1,
            padding: '8px 20px',
            background: isPlaying ? '#f25d8e' : '#00a1d6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.background = isPlaying ? '#e0557f' : '#00b8e6'}
          onMouseLeave={(e) => e.target.style.background = isPlaying ? '#f25d8e' : '#00a1d6'}
        >
          {isPlaying ? '⏫ 隐藏视频' : '⏬ 播放视频'}
        </button>
      </div>
      
      {/* 控制视频iframe的显示/隐藏 */}
      {isPlaying && (
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={videoUrl}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            scrolling="no"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`B站视频-${bvid}`} // 增加必选的title属性，避免React警告
          />
        </div>
      )}
    </div>
  );
};

// 导出默认组件（方便使用）
export default BilibiliPlayer;
