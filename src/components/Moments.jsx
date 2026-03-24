// src/components/Moments.jsx
import React, { useState } from 'react';
// 可选：如果有自定义背景图片，先导入
// import headerBg from '../assets/header-bg.jpg';

const Moments = () => {
  const [previewImage, setPreviewImage] = useState(null); // 图片预览

  const momentsData = [
      // 2025年6月19日（最早）
  {
    id: 1,
    time: '2025年6月19日',
    content: '📌今天去单位学习,离上班没多久了，然后也下着雨就不回家了。',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年6月27日
  {
    id: 2,
    time: '2025年6月27日',
    content: '💬一个人放下地东西越多，他就越富有。',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 3,
    time: '2025年6月27日',
    content: '💪幽门螺旋杆菌，我要战胜你。',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年6月28日
  {
    id: 4,
    time: '2025年6月28日',
    content: '💬抱怨是对服从的发泄，闹腾的是软蛋，沉默的才是犟种。',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年6月29日
  {
    id: 5,
    time: '2025年6月29日',
    content: '🚬如果事与愿违，请相信上帝另有安排。一切都是最好的安排。',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年6月30日
  {
    id: 6,
    time: '2025年6月30日',
    content: '㊗️今天休息，孩子6年级毕业典礼，挺好的开端。',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年7月4日
  {
    id: 7,
    time: '2025年7月4日',
    content: '💪备考7月24日班组长抽考！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年7月15日
  {
    id: 8,
    time: '2025年7月15日',
    content: '💬好运总是要先捉弄一番，然后才向着坚忍不拔者微笑的。',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年7月28日
  {
    id: 9,
    time: '2025年7月28日',
    content: '✅今日更新一些教育资源',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年8月2日
  {
    id: 10,
    time: '2025年8月2日',
    content: '✅今天在家吃个火锅，那个酸爽😂',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年8月8日
  {
    id: 11,
    time: '2025年8月8日',
    content: '✅今天那口子外出学习,希望一切顺利！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年8月20日
  {
    id: 12,
    time: '2025年8月20日',
    content: '✅幽门螺杆菌over!🤟',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年8月23日
  {
    id: 13,
    time: '2025年8月23日',
    content: '✅今日孩子们报道，希望孩子们有个好的开端，未来可期！',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 14,
    time: '2025年8月23日',
    content: '✅三两知己足慰平生，一室温馨胜过万千浮华。ʚ🧸ྀིɞ',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年8月25日
  {
    id: 15,
    time: '2025年8月25日',
    content: '✅今日孩子们分班考试，希望都分到一个好的班级，顺便更新两个站点！💪',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年9月1日
  {
    id: 16,
    time: '2025年9月1日',
    content: '✅洗衣机已修好over!',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年9月12日
  {
    id: 17,
    time: '2025年9月12日',
    content: '✅神兽上学🏫，世界终于恢复平静！🙃',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年9月15日
  {
    id: 18,
    time: '2025年9月15日',
    content: '✅今天添加两首歌词！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年9月19日
  {
    id: 19,
    time: '2025年9月19日',
    content: '✅今天还在下雨！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年10月1日
  {
    id: 20,
    time: '2025年10月1日',
    content: '✅今天是全民期待的国庆日，然而还在下雨！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年10月15日
  {
    id: 21,
    time: '2025年10月15日',
    content: '✅今天休息，但还要干活-(⊙o⊙)…！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年10月31日
  {
    id: 22,
    time: '2025年10月31日',
    content: '✅今天又休息，然而还要干活-(⊙o⊙)…！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年11月5日
  {
    id: 23,
    time: '2025年11月5日',
    content: '✅两个孩子都不舒服，希望都快点好起来！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年11月6日
  {
    id: 24,
    time: '2025年11月6日',
    content: '✅技能等级理论考试通过，欧耶！(*^▽^*)',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 25,
    time: '2025年11月6日',
    content: '✅技能等级实操考试通过！ᖰ･◡･ᖳ',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年11月9日
  {
    id: 26,
    time: '2025年11月9日',
    content: '✅瓦斯浓度搞定，🤭',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 27,
    time: '2025年11月9日',
    content: '✅洗衣机电机搞定，🤔',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 28,
    time: '2025年11月9日',
    content: '✅照顾好自己，世界才会属于你。风雨由天，快乐由己。保持微笑，一路向前。会有一束光的出现，照亮你的春夏秋冬！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年11月18日
  {
    id: 29,
    time: '2025年11月18日',
    content: '✅今天是自己生日，对自己说一声生日快乐O(∩_∩)O哈哈~！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年12月14日
  {
    id: 30,
    time: '2025年12月14日',
    content: '✅妈的，今天腰疼还要上班…一个个的！😒',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 31,
    time: '2025年12月14日',
    content: '✅好在负压已经搞定！😉',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 32,
    time: '2025年12月14日',
    content: '⏰时间赠予我们相遇的权利，希望我们都能用陪伴，将权利写成爱的永恒…',
    images: [],
    likes: [],
    comments: []
  },
  {
    id: 33,
    time: '2025年12月14日',
    content: '💬所谓孝顺，从不是简单的给钱，而是给 “能见到你” 的时光。',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年12月17日
  {
    id: 34,
    time: '2025年12月17日',
    content: '💬今天本计划休息的，MD还要替人上班，艾草！',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年12月21日
  {
    id: 35,
    time: '2025年12月21日',
    content: '💬今天休息！(#^.^#)',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年12月23日
  {
    id: 36,
    time: '2025年12月23日',
    content: '✅享受生命中的每一个细节，因为当你回首往事时可能会发现原来那些所谓的小事是多么的重要',
    images: [],
    likes: [],
    comments: []
  },
  // 2025年12月26日
  {
    id: 37,
    time: '2025年12月26日',
    content: '✅更新一些有用的网站，一会儿还要去上班，我嘞个去!',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年1月10日
  {
    id: 38,
    time: '2026年1月10日',
    content: '✅更新电视直播用的网站，今天到底该不该上班呢!',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年1月14日
  {
    id: 39,
    time: '2026年1月14日',
    content: '✅事与愿违，焉知祸福，呵呵🙃',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年1月15日
  {
    id: 40,
    time: '2026年1月15日',
    content: '✅今天本来不休息的，到班上了又发现搭档和我调休呢，好吧，回家休息。😑',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年1月25日
  {
    id: 41,
    time: '2026年1月25日',
    content: '✅生活虽不易，未来仍可期！加油！',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年2月8日
  {
    id: 42,
    time: '2026年2月8日',
    content: '✅今日陪父母去医院复查，一切会好的是吧，为了明天加油！',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年2月13日
  {
    id: 43,
    time: '2026年2月13日',
    content: '✅本来计划今天休息，又泡汤了，同事和我换班，好吧，满足你！😳',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年2月17日
  {
    id: 44,
    time: '2026年2月17日',
    content: '✅今天大年初一，㊗️自己和家人身体健康，万事顺意！',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年2月20日
  {
    id: 45,
    time: '2026年2月20日',
    content: '✅今日休息，今天正好送弟弟回京，㊗️他一路顺风！也该整理整理心思，开始新的征程了！',
    images: [],
    likes: [],
    comments: []
  },
  // 2026年2月26日
  {
    id: 46,
    time: '2026年2月26日 14:23',
    content: '👌终于把碎碎念做完了，记录一下这个小成就 ✨',
    images: [],
    likes: ['张三', '李四'],
    comments: [
      { from: '张三', content: '厉害呀！' },
      { from: '我', to: '张三', content: '谢谢～' }
    ]
  },
   // 2026年3月2日（最新）
  {
    id: 47,
    time: '2026年3月2日',
    content: '✅今日备份下空间数据。',
    images: [],
    likes: [],
    comments: []
  },
    {
    id: 48,
    time: '2026年3月5日',
    content: '✅今日把碎碎念同步一下！୧⍤⃝🍓୧⍤⃝🌸୧⍤⃝🍎୧⍤⃝🍉。',
    images: [],
    likes: [],
    comments: []
  },
    {
    id: 49,
    time: '2026年3月6日 23:55',
    content: '✅又下班了，哈吼。',
    images: [],
    likes: [],
    comments: []
  },
    {
    id: 50,
    time: '2026年3月7日 23:40',
    content: '✅又是无所事事的一天！也没找到什么新歌曲！',
    images: [],
    likes: [],
    comments: []
  },
    {
    id: 51,
    time: '2026年3月9日 9:20',
    content: '✅今天本该轮休，无奈同事去培训，然而，我就不能休息了！纯属无奈啊',
    images: ['img/51.png'],
    likes: [],
    comments: []
  },
    {
    id: 52,
    time: '2026年3月13日 9:46',
    content: '✅前几天收到站点侵权，被迫关闭几天，我也是无语了，怎么侵权呢，不得而知！',
    images: [],
    likes: [],
    comments: []
  },
    {
    id: 53,
    time: '2026年3月14日 8:50',
    content: '✅今天终于可以休息了，快乐加倍，哈哈😄！',
    images: [],
    likes: [],
    comments: []
  },
    {
    id: 54,
    time: '2026年3月15日 9:50',
    content: '😒今天去查血型，那个人多啊，排到24号了，好吧，坚持到底！',
    images: [],
    likes: [],
    comments: []
    },
    {
    id: 55,
    time: '2026年3月20日 11:00',
    content: '💪凡是过往，皆为序章。明天起，撸起袖子加油干！',
    images: [],
    likes: [],
    comments: []
    },
    {
    id: 56,
    time: '2026年3月25日 7:50',
    content: '㊗️愿我们都能少一些内耗，多一些豁达；少一些透支，多一些珍惜，平安、健康地走完这一生！',
    images: [],
    likes: [],
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
