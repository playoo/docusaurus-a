import React from 'react';

const images = require.context('@site/static/img/gallery', true, /\.(png|jpe?g|webp|gif|svg)$/i);

export default function AutoGallery() {
  // 按子目录分组
  const groups = {};
  images.keys().forEach((key) => {
    const src = images(key).default || images(key);
    // key 形如 './旅行/01.jpg'，提取目录名
    const parts = key.replace(/^\.\//, '').split('/');
    const folder = parts.length > 1 ? parts[0] : '未分类';
    if (!groups[folder]) groups[folder] = [];
    groups[folder].push(src);
  });

  if (Object.keys(groups).length === 0) {
    return <p>相册中还没有图片~</p>;
  }

  return (
    <div>
      {Object.entries(groups).map(([folder, list]) => (
        <section key={folder} style={{ marginBottom: '32px' }}>
          <h2>{folder}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
          }}>
            {list.map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`${folder}-${i}`} loading="lazy"
                  style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}