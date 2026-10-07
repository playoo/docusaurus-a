import React from 'react';

// 自动扫描静态目录下的所有图片
const images = require.context('@site/static/img/gallery', false, /\.(png|jpe?g|webp|gif|svg)$/i);

export default function AutoGallery() {
  const imageList = images.keys().map((key) => images(key).default || images(key));

  if (imageList.length === 0) {
    return <p>相册中还没有图片，快去 static/img/gallery 里添加吧~</p>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '12px',
      padding: '16px 0',
    }}>
      {imageList.map((src, index) => (
        <a key={index} href={src} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={`gallery-${index}`}
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
              transition: 'opacity 0.2s',
            }}
          />
        </a>
      ))}
    </div>
  );
}