import React from 'react';

const images = require.context('@site/static/img/gallery', true, /\.(png|jpe?g|webp|gif|svg)$/i);

export default function AutoGallery() {
  const groups = {};
  const uncategorized = [];

  images.keys().forEach((key) => {
    const src = images(key).default || images(key);
    const parts = key.replace(/^\.\//, '').split('/');
    if (parts.length > 1) {
      const folder = parts[0];
      if (!groups[folder]) groups[folder] = [];
      groups[folder].push(src);
    } else {
      uncategorized.push(src);
    }
  });

  // 按文件夹名排序
  const sortedFolders = Object.keys(groups).sort();

  const renderGrid = (list, folderName) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '12px',
    }}>
      {list.map((src, i) => (
        <a key={i} href={src} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={`${folderName}-${i}`} loading="lazy"
            style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
        </a>
      ))}
    </div>
  );

  return (
    <div>
      {/* 先渲染有分类的文件夹 */}
      {sortedFolders.map((folder) => (
        <section key={folder} style={{ marginBottom: '32px' }}>
          <h2>{folder}</h2>
          {renderGrid(groups[folder], folder)}
        </section>
      ))}

      {/* 最后渲染未分类 */}
      {uncategorized.length > 0 && (
        <section style={{ marginBottom: '32px' }}>
          <h2>未分类</h2>
          {renderGrid(uncategorized, '未分类')}
        </section>
      )}

      {sortedFolders.length === 0 && uncategorized.length === 0 && (
        <p>相册中还没有图片~</p>
      )}
    </div>
  );
}