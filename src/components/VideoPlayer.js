import React, { useState } from 'react';

export default function VideoPlayer({ prefix, suffix, playlist, title }) {
  const [current, setCurrent] = useState(0);

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      {/* 播放器容器：宽度100%，和父容器完全等宽 */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
        background: '#000',
        overflow: 'hidden',
      }}>
        <iframe
          src={`${prefix}${playlist[current]?.url}${suffix}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          allowFullScreen
        />
      </div>

      {/* 两行一列表格：宽度100%，和播放器完全等宽 */}
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff',
        border: '1px solid #eee',
        marginTop: '1px',
        boxSizing: 'border-box',
      }}>
        <tbody>
          {/* 第一行：视频图标 + 标题 */}
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
                {/* 视频播放图标 */}
                <svg 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  style={{ width: '20px', height: '20px', color: '#0ea5e9' }}
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                {title}
              </div>
            </td>
          </tr>

          {/* 第二行：分集按钮 */}
          <tr>
            <td style={{ padding: '1rem 0.75rem' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {playlist.map((item, i) => (
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
                      backgroundColor: i === current ? '#2563eb' : '#6c757d',
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}