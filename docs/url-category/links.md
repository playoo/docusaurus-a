---
sidebar_position: 0
title: 🏠️ 首页导航
---

import Link from "@docusaurus/Link";
import { useEffect, useRef } from "react";

export default function CategoryCards() {
  const cardRefs = useRef([]);

  // 随机渐变配色库
  const gradients = [
    "linear-gradient(135deg, #4e7eff, #8c52ff)", // 蓝紫
    "linear-gradient(135deg, #ff6b9d, #ff9a8b)", // 红粉
    "linear-gradient(135deg, #3abef9, #4e7eff)", // 浅蓝
    "linear-gradient(135deg, #f77088, #fd6e84)", // 玫红
    "linear-gradient(135deg, #65799b, #55788c)", // 灰蓝
    "linear-gradient(135deg, #fa709a, #fee140)", // 粉橙
    "linear-gradient(135deg, #30cfd0, #330867)", // 青蓝
    "linear-gradient(135deg, #84fab0, #8fd3f4)", // 绿青
    "linear-gradient(135deg, #f47920, #ff9500)",  // 橙色
  ];

  // 给每个卡片随机上色
  useEffect(() => {
    cardRefs.current.forEach(card => {
      if (card) {
        const randomGrad = gradients[Math.floor(Math.random() * gradients.length)];
        card.style.background = randomGrad;
      }
    });
  }, []);

  // 卡片共用样式
  const cardStyle = {
    height: '80px',
    fontSize: '1.5rem',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem',
  };

  // 悬浮效果
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
  };

  return (
    <div className="row" style={{ rowGap: '1.2rem' }}>

      {/* 产品运营 */}
      <div className="col col--4">
        <Link to="/docs/url-category/links" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[0] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>📘 产品运营</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>行业资讯 · 运营技巧</div>
          </div>
        </Link>
      </div>

      {/* 新闻资讯 */}
      <div className="col col--4">
        <Link to="/docs/url-category/新闻资讯" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[1] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>📰 新闻资讯</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>热点 · 时事 · 综合资讯</div>
          </div>
        </Link>
      </div>

      {/* 资源搜索 */}
      <div className="col col--4">
        <Link to="/docs/url-category/资源搜索" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[2] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🔍 资源搜索</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>网盘 · 影视 · 学习资源</div>
          </div>
        </Link>
      </div>

      {/* 在线工具 */}
      <div className="col col--4">
        <Link to="/docs/url-category/在线工具" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[3] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🧰 在线工具</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>效率 · 转换 · 实用工具</div>
          </div>
        </Link>
      </div>

      {/* 在线办公 */}
      <div className="col col--4">
        <Link to="/docs/url-category/在线办公" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[4] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>📚 在线办公</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>文档 · 协作 · 云办公</div>
          </div>
        </Link>
      </div>

      {/* 哲学心理 */}
      <div className="col col--4">
        <Link to="/docs/url-category/哲学心理" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[5] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>📑 哲学心理</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>认知 · 情绪 · 自我成长</div>
          </div>
        </Link>
      </div>

      {/* 社会科学 */}
      <div className="col col--4">
        <Link to="/docs/url-category/社会科学" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[6] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>📔 社会科学</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>历史 · 法律 · 社会研究</div>
          </div>
        </Link>
      </div>

      {/* 英语学习 */}
      <div className="col col--4">
        <Link to="/docs/url-category/英语学习" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[7] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🧑‍🎓 英语学习</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>单词 · 语法 · 听说读写</div>
          </div>
        </Link>
      </div>

      {/* 自然科学 */}
      <div className="col col--4">
        <Link to="/docs/url-category/自然科学" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[8] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>👓 自然科学</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>数理 · 化学 · 天文地理</div>
          </div>
        </Link>
      </div>

      {/* 科技数码 */}
      <div className="col col--4">
        <Link to="/docs/url-category/科技数码" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[9] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>💽 科技数码</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>硬件 · 软件 · 数码评测</div>
          </div>
        </Link>
      </div>

      {/* 软件开发 */}
      <div className="col col--4">
        <Link to="/docs/url-category/软件开发" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[10] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>💻 软件开发</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>编程 · 框架 · 项目实战</div>
          </div>
        </Link>
      </div>

      {/* 平面设计 */}
      <div className="col col--4">
        <Link to="/docs/url-category/平面设计" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[11] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🎨 平面设计</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>排版 · 插画 · UI设计</div>
          </div>
        </Link>
      </div>

      {/* 文化艺术 */}
      <div className="col col--4">
        <Link to="/docs/url-category/文化艺术" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[12] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🎭 文化艺术</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>文学 · 美术 · 传统艺术</div>
          </div>
        </Link>
      </div>

      {/* 影视音乐 */}
      <div className="col col--4">
        <Link to="/docs/url-category/影视音乐" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[13] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🎬 影视音乐</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>电影 · 剧集 · 音乐歌单</div>
          </div>
        </Link>
      </div>

      {/* 娱乐休闲 */}
      <div className="col col--4">
        <Link to="/docs/url-category/娱乐休闲" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[14] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🎮 娱乐休闲</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>游戏 · 趣闻 · 生活消遣</div>
          </div>
        </Link>
      </div>

      {/* 文学知识 */}
      <div className="col col--4">
        <Link to="/docs/url-category/文学知识" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[15] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>📖 文学知识</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>名著 · 诗词 · 写作素材</div>
          </div>
        </Link>
      </div>

      {/* 生活频道 */}
      <div className="col col--4">
        <Link to="/docs/url-category/生活频道" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[16] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🏠 生活频道</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>美食 · 家居 · 日常技巧</div>
          </div>
        </Link>
      </div>

      {/* 电商运营 */}
      <div className="col col--4">
        <Link to="/docs/url-category/电商运营" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
          <div 
            ref={(el) => cardRefs.current[17] = el}
            className="card"
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="card__header" style={{ color: '#fff', fontWeight: 500 }}>🛒 电商运营</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>店铺 · 流量 · 电商变现</div>
          </div>
        </Link>
      </div>

    </div>
  );
}
