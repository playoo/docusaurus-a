---
sidebar_position: 0
title: 🏠️ 文档导航
---

import Link from "@docusaurus/Link";
import { useEffect, useRef } from "react";

export default function CategoryCards() {
  const cardRefs = useRef([]);

  // 随机渐变配色库
  const gradients = [
    "linear-gradient(135deg, #4e7eff, #8c52ff)", // 1 蓝紫
    "linear-gradient(135deg, #ff6b9d, #ff9a8b)", // 2 红粉
    "linear-gradient(135deg, #3abef9, #4e7eff)", // 3 浅蓝
    "linear-gradient(135deg, #f77088, #fd6e84)", // 4 玫红
    "linear-gradient(135deg, #65799b, #55788c)", // 5 灰蓝
    "linear-gradient(135deg, #fa709a, #fee140)", // 6 粉橙
    "linear-gradient(135deg, #30cfd0, #330867)", // 7 青蓝
    "linear-gradient(135deg, #84fab0, #8fd3f4)", // 8 绿青
    "linear-gradient(135deg, #f47920, #ff9500)", // 9 橙色
    "linear-gradient(135deg, #9d50bb, #6e48aa)", // 10 深紫
    "linear-gradient(135deg, #50c9ce, #3ba4c7)", // 11 薄荷蓝
    "linear-gradient(135deg, #ffd1ff, #b86bff)", // 12 浅粉紫
    "linear-gradient(135deg, #4158d0, #c850c0)", // 13 梦幻紫粉
    "linear-gradient(135deg, #ffcc70, #c850c0)", // 14 暖黄玫红
    "linear-gradient(135deg, #1a2a6c, #b21f1f)", // 15 深邃红蓝
    "linear-gradient(135deg, #00c9ff, #92fe9d)", // 16 清新青柠
    "linear-gradient(135deg, #d4fc79, #96e6a1)", // 17 嫩草绿
    "linear-gradient(135deg, #667eea, #764ba2)", // 18 莫兰迪紫
    "linear-gradient(135deg, #ff9a9e, #fad0c4)", // 19 裸粉温柔
    "linear-gradient(135deg, #2c3e50, #4ca1af)"  // 20 深空暗蓝
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

  // 卡片基础样式：文字靠上、内边距优化
  const cardBaseStyle = {
    height: '80px',
    padding: '0.8rem 1.2rem',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '4px'
  };

  return (
    <div style={{
      backgroundColor: '#f7f8fa',
      borderRadius: '18px',
      padding: '1.8rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
      marginBottom: '2rem'
    }}>
      <div className="row" style={{ rowGap: '1.2rem' }}>

        {/* 音乐动听 */}
        <div className="col col--4">
          <Link to="/docs/category/-01-音乐动听" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[0] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>📘 音乐动听</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>无损音乐 · 歌单 · 音频工具</div>
            </div>
          </Link>
        </div>

        {/* 学习教育 */}
        <div className="col col--4">
          <Link to="/docs/category/-02-学习教育" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[1] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>📰 学习教育</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>课程 · 题库 · 学习资料</div>
            </div>
          </Link>
        </div>

        {/* 办公素材 */}
        <div className="col col--4">
          <Link to="/docs/category/-03-办公素材" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[2] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>🔍 办公素材</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>模板 · 文档 · 办公资源</div>
            </div>
          </Link>
        </div>

        {/* 书籍漫画 */}
        <div className="col col--4">
          <Link to="/docs/category/-04-书籍漫画" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[3] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>🧰 书籍漫画</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>电子书 · 漫画 · 阅读器</div>
            </div>
          </Link>
        </div>

        {/* 影视直播 */}
        <div className="col col--4">
          <Link to="/docs/category/-05-影视直播" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[4] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>📚 影视直播</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>影视资源 · 直播 · 播放器</div>
            </div>
          </Link>
        </div>

        {/* 资源搜索 */}
        <div className="col col--4">
          <Link to="/docs/category/-06-资源搜索" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[5] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>📑 资源搜索</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>网盘搜索 · 磁力 · 资源索引</div>
            </div>
          </Link>
        </div>

        {/* 软件游戏 */}
        <div className="col col--4">
          <Link to="/docs/category/%EF%B8%8F-07-软件游戏" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[6] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>📔 软件游戏</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>软件下载 · 游戏 · 破解工具</div>
            </div>
          </Link>
        </div>

        {/* 实用工具 */}
        <div className="col col--4">
          <Link to="/docs/category/%EF%B8%8F-08-实用工具" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[7] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>🧑‍🎓 实用工具</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>效率工具 · 转换 · 系统增强</div>
            </div>
          </Link>
        </div>

        {/* 各种指南 */}
        <div className="col col--4">
          <Link to="/docs/category/-09-各种指南" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[8] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>🔬 各种指南</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>教程 · 攻略 · 使用指南</div>
            </div>
          </Link>
        </div>

        {/* 电视剧集 */}
        <div className="col col--4">
          <Link to="/docs/category/-10-电视剧集" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[9] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>💽 电视剧集</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>美剧 · 日韩剧 · 国产剧</div>
            </div>
          </Link>
        </div>

        {/* 手机常用 */}
        <div className="col col--4">
          <Link to="/docs/category/-11-手机常用" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[10] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>💻 手机常用</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>安卓 · iOS · 玩机技巧</div>
            </div>
          </Link>
        </div>

        {/* 其他分类 */}
        <div className="col col--4">
          <Link to="/docs/category/12-其他分类" style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
            <div 
              ref={(el) => cardRefs.current[11] = el}
              className="card" style={cardBaseStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03)';
              }}>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>🎨 其他分类</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>综合 · 杂项 · 待整理</div>
            </div>
          </Link>
        </div>

       

      </div>
    </div>
  );
}
