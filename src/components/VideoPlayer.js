import React, { useState, useEffect, useMemo } from 'react';

export default function VideoPlayer({
  prefix = "https://lziplayer.com/?url=",
  suffix = "",
  playlist = [],
  title = "视频播放"
}) {
  const [current, setCurrent] = useState(0);

  // 解析播放列表：兼容 字符串($分隔) / 对象 两种格式
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

  // 切换剧集列表时，重置为第一集
  useEffect(() => {
    setCurrent(0);
  }, [playlist]);

  return (
    <div style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
      
      {/* 1. 播放器区域 (16:9 比例) */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
        background: '#000',
        borderRadius: '8px 8px 0 0',
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
            title={`${title} - ${realPlaylist[current].title}`}
          />
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '1rem'
          }}>
            暂无视频播放列表
          </div>
        )}
      </div>

      {/* 2. 分集列表区域 (和播放器完全等宽) */}
      <div style={{
        width: '100%',
        border: '1px solid #e5e7eb',
        borderTop: 'none', // 无缝连接播放器
        borderRadius: '0 0 8px 8px',
        background: '#fff',
        padding: '0 0 1rem 0',
        boxSizing: 'border-box'
      }}>
        
        {/* 2.1 标题行 */}
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

        {/* 2.2 按钮行 (核心修改：利用 CSS 媒体查询控制) */}
        <div style={{
          display: 'grid',
          // ★★★★★ 电脑端默认：每行铺满5个，具体根据屏幕宽度自适应 ★★★★★
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
          gap: '0.5rem',
          padding: '1rem 1rem 0 1rem',
        }}>
          {/* ★★★★★ 在 style 标签里插入媒体查询，覆盖手机端行为 ★★★★★ */}
          <style>{`
            /* 当屏幕宽度小于 480px (手机) 时，强制每行 4 个 */
            @media (max-width: 480px) {
              .episode-grid {
                gridTemplateColumns: repeat(4, 1fr) !important;
              }
            }
          `}</style>

          {hasPlaylist ? (
            realPlaylist.map((item, i) => {
              const isCurrent = i === current;
              return (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  disabled={isCurrent}
                  style={{
                    padding: '0.5rem 0',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    cursor: isCurrent ? 'default' : 'pointer',
                    backgroundColor: isCurrent ? '#2563eb' : '#6c757d',
                    width: '100%',
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
            <span style={{ color: '#6c757d', gridColumn: '1 / -1', padding: '0.5rem 0' }}>
              暂无分集数据
            </span>
          )}
        </div>

      </div>
    </div>
  );
}