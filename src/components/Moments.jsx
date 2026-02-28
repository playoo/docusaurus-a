// src/components/Moments.jsx
import React, { useState } from 'react';
// 可选：如果有自定义背景图片，先导入
// import headerBg from '../assets/header-bg.jpg';

const Moments = () => {
  const [previewImage, setPreviewImage] = useState(null); // 图片预览

  const momentsData = [
    {
      id: 1,
      time: '2026年2月26日 14:23',
      content: '终于把碎碎念做完了，记录一下这个小成就 ✨',
      images: [],
      likes: ['张三', '李四'],
      comments: [{ from: '张三', content: '厉害呀！' }, { from: '我', to: '张三', content: '谢谢～' }]
    },
    {
      id: 2,   
      time: '2026年2月27日 20:45',
      content: '分享一组好看的风景照，周末去爬山拍的～',
      images: ['https://picsum.photos/200/200', 'https://picsum.photos/333/40/40', 'https://picsum.photos/222/200/200', 'https://picsum.photos/111/200/200'],
      likes: ['王五', '赵六', '小七'],
      comments: [{ from: '王五', content: '这是哪里呀？风景好美！' }, { from: '我', to: '王五', content: '是黄山哦，值得一去～' }]
    },
    {
      id: 3,   
      time: '2026年2月28日 13:06',
      content: '今天下着小雨，但却仍然要去做牛马😑…',
      images: ['https://picsum.photos/666/200/200', 'https://picsum.photos/555/40/40', 'https://picsum.photos/444/200/200', 'https://picsum.photos/200/200'],
      likes: ['王五', '赵六', '小七'],
      comments: []
    }
  ];

  // 图片九宫格
  const ImageGrid = ({ images }) => {
    const count = images.length;
    let gridStyle = {};

    if (count === 1) {
      gridStyle = { gridTemplateColumns: '1fr', width: '200px', height: '200px' };
    } else if (count === 2 || count === 4) {
      gridStyle = { gridTemplateColumns: '1fr 1fr', gap: '4px' };
    } else {
      gridStyle = { gridTemplateColumns: '1fr 1fr 1fr', gap: '4px' };
    }

    return (
      <div style={{ display: 'grid', marginTop: '8px', ...gridStyle }}>
        {images.map((img, idx) => (
          <div 
            key={idx} 
            style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}
            onClick={() => setPreviewImage(img)} // 点击放大
          >
            <img 
              src={img} 
              alt={`pic-${idx}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => e.target.src = 'https://picsum.photos/200/200'} // 图片加载失败兜底
            />
          </div>
        ))}
      </div>
    );
  };

  // 单条朋友圈
  const MomentItem = ({ data }) => {
    const [liked, setLiked] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState(data.comments);

    const toggleLike = () => setLiked(!liked);

    const submitComment = (e) => {
      e.preventDefault();
      if (!commentText.trim()) return;
      setComments([...comments, { from: '我', content: commentText.trim() }]);
      setCommentText('');
      setShowComment(false);
    };

    const likeList = [...data.likes, liked ? '我' : ''].filter(Boolean);

    return (
      <div style={{ 
        marginBottom: '16px', 
        border: '1px solid #e5e7eb', 
        borderRadius: '8px',
        backgroundColor: 'white',
        padding: '12px 16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <img 
            src='img/tx.jpg' // 替换为你的头像地址
            alt='旧梦' 
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '12px' }} 
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>旧梦</div>
            <div style={{ fontSize: '12px', color: '#9ca3af' }}>{data.time}</div>
          </div>
        </div>

        <div style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '8px' }}>
          {data.content}
          {data.images.length > 0 && <ImageGrid images={data.images} />}
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '8px',
          paddingTop: '8px',
          borderTop: '1px solid #f3f4f6'
        }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={toggleLike}
              style={{ 
                border: 'none', 
                background: 'transparent', 
                color: liked ? '#ed4956' : '#6b7280',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >
              ❤️ {liked ? '已赞' : '点赞'}
            </button>
            <button 
              onClick={() => setShowComment(true)}
              style={{ 
                border: 'none', 
                background: 'transparent', 
                color: '#6b7280',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >
              💬 评论
            </button>
          </div>
        </div>

        {likeList.length > 0 && (
          <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
            <span style={{ fontSize: '13px', color: '#6b7280' }}>
              {likeList.join('、')}
            </span>
          </div>
        )}

        {comments.length > 0 && (
          <div style={{ marginTop: '8px' }}>
            {comments.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '4px', padding: '6px 8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
                <span style={{ fontSize: '14px' }}>
                  <strong>{item.from}</strong>
                  {item.to && <span style={{ color: '#6b7280' }}> 回复 {item.to}：</span>}
                  {item.content}
                </span>
              </div>
            ))}
          </div>
        )}

        {showComment && (
          <form onSubmit={submitComment} style={{ marginTop: '8px', display: 'flex' }}>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="说点什么..."
              style={{ 
                flex: 1, 
                padding: '8px 12px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '20px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button 
              type="submit"
              style={{ 
                marginLeft: '8px',
                border: 'none',
                backgroundColor: '#0884ff',
                color: 'white',
                borderRadius: '20px',
                padding: '8px 16px',
                cursor: 'pointer'
              }}
            >
              发送
            </button>
          </form>
        )}
      </div>
    );
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px 16px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* 顶部标题区域 - 增加背景样式 */}
      <div style={{ 
        textAlign: 'left', 
        marginBottom: '24px',
        padding: '24px 16px', // 增加内边距，让背景更明显
        borderRadius: '8px',
        // 方案1：渐变背景（推荐）
        //background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        // 方案2：纯色背景
        // background: '#0884ff',
        // 方案3：背景图片（取消注释并替换图片地址）
         backgroundImage: 'url(img/ssntp.jpg)',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
        color: 'white', // 文字改为白色，适配背景
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // 增加阴影，提升层次感
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, margin: 0, textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>【碎碎念】</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', margin: '8px 0 0 0', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>美好的心情是人生唯一不能剥夺的财富！</p>
      </div>
      
      {momentsData.map(item => (
        <MomentItem key={item.id} data={item} />
      ))}

      {/* 图片预览层 */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out'
          }}
        >
          <img 
            src={previewImage} 
            alt="预览" 
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '4px'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Moments;
