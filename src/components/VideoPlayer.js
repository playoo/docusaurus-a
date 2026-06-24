import React, { useState, useEffect, useMemo } from 'react';

export default function VideoPlayer({
  prefix = "https://lziplayer.com/?url=",
  suffix = "",
  playlist = [],
  title = "视频播放"
}) {
  const [current, setCurrent] = useState(0);

  // 解析播放列表
  const realPlaylist = useMemo(() => {
    if (!Array.isArray(playlist)) return [];
    return playlist.map(item => {
      if (typeof item === 'string') {
        const [itemTitle, url] = item.split('$');
        return { title: itemTitle || `第${item.length}集`, url: url || '' };
      }
      return item;
    });
  }, [playlist]);

  const hasPlaylist = realPlaylist.length > 0;

  // 切换列表重置
  useEffect(() => {
    setCurrent(0);
  }, [playlist]);

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      
      {/* 1. 播放器外框 */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
        background: '#000',
        borderRadius: '4px 4px 0 0',
        overflow: 'hidden',
      }}>
        {hasPlaylist && realPlaylist[current]?.url ? (
          <iframe
            src={`${prefix}${realPlaylist[current].url}${suffix}`}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              border: 0,
            }}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts"
          />
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '1rem'
          }}>
            暂无视频播放列表 (请检查URL)
          </div>
        )}
      </div>

      {/* 2. 分集表格 + 标题 区域 (宽度100%) */}
      <div style={{
        width: '100%',
        border: '1px solid #e5e7eb',
        borderTop: 'none',
        borderRadius: '0 0 4px 4px',
        background: '#fff',
        padding: '0 0 1rem 0',
        boxSizing: 'border-box'
      }}>
        
        {/* 标题行 */}
        <div style={{
          padding: '1rem 1rem',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 600,
          fontSize: '1.1rem',
          color: '#1f2937',
          background: '#fafafa'
        }}>
           <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: '20px', height: '20px', color: '#0ea5e9' }}>
             <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
           </svg>
           {title}
        </div>

        {/* 按钮行 */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          padding: '1rem 1rem 0 1rem', // 按钮区域的内边距
        }}>
          {hasPlaylist ? (
            realPlaylist.map((item, i) => {
              const isCurrent = i === current;
              return (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  disabled={isCurrent}
                  style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    cursor: isCurrent ? 'default' : 'pointer',
                    backgroundColor: isCurrent ? '#2563eb' : '#6c757d', // 激活蓝，禁用灰
                    minWidth: '65px',
                    textAlign: 'center',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => !isCurrent && (e.currentTarget.style.backgroundColor = '#5a6268')}
                  onMouseLeave={(e) => !isCurrent && (e.currentTarget.style.backgroundColor = '#6c757d')}
                >
                  {item.title}
                </button>
              );
            })
          ) : (
            <span style={{ color: '#6c757d' }}>暂无分集数据</span>
          )}
        </div>

      </div>
    </div>
  );
}