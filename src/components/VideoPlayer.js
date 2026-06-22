import React, { useState, useEffect } from 'react';

// 内置默认prefix：https://lziplayer.com/?url=
export default function VideoPlayer({
  prefix = "https://lziplayer.com/?url=",
  suffix,
  playlist,
  title
}) {
  const [current, setCurrent] = useState(0);

  // 解析：兼容 字符串($分隔) / 对象 两种格式
  const parsePlaylist = (list) => {
    if (!Array.isArray(list)) return [];
    return list.map(item => {
      // 如果是字符串，按 $ 分割
      if (typeof item === 'string') {
        const [itemTitle, url] = item.split('$');
        return { title: itemTitle || '', url: url || '' };
      }
      // 如果已经是对象，直接返回
      return item;
    });
  };

  const realPlaylist = parsePlaylist(playlist);
  const hasPlaylist = realPlaylist.length > 0;

  // 列表切换重置播放项
  useEffect(() => {
    setCurrent(0);
  }, [playlist]);

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      {/* 播放器容器 */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
        background: '#000',
        overflow: 'hidden',
      }}>
        {hasPlaylist ? (
          <iframe
            src={`${prefix}${realPlaylist[current]?.url}${suffix}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts"
          />
        ) : (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1rem',
          }}>
            暂无视频播放列表
          </div>
        )}
      </div>

      {/* 标题 + 分集表格 */}
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff',
        border: '1px solid #eee',
        marginTop: '1px',
        boxSizing: 'border-box',
      }}>
        <tbody>
          <tr>
            <td style={{
              padding: '1rem 0.75rem',
              borderBottom: '1px solid #eee',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#1f2937',
              }}>
                <svg 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  style={{ width: '20px', height: '20px', color: '#0ea5e9' }}
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                {title || '视频播放'}
              </div>
            </td>
          </tr>

          <tr>
            <td style={{ padding: '1rem 0.75rem' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {hasPlaylist ? (
                  realPlaylist.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                        backgroundColor: i === current ? '#2563eb' : '#6c757d',
                        flex: '1 0 auto',
                        minWidth: '70px',
                        maxWidth: '120px',
                        textAlign: 'center',
                      }}
                      disabled={i === current}
                    >
                      {item.title}
                    </button>
                  ))
                ) : (
                  <span style={{ color: '#6c757d' }}>暂无分集</span>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}