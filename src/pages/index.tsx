import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';


import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.heroButton)}
            to="/docs/docs-category/intro">
          
            技术文档 📗
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton)}
            to="/docs/url-category/links">
            
            资源收藏 📜
          </Link>
		  <Link
            className={clsx('button button--lg', styles.heroButton)}
            to="/blog">
          
            博客 📝
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton)}
            to="/gallery">
            
            相册 📷
          </Link>
		   <Link
            className={clsx('button button--lg', styles.heroButton)}
            to="/thoughts">
            
            碎碎念 🎏
          </Link>
		 
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <div className={styles.quickLinks}>
      <Link className={styles.card} to="/docs/docs-category/intro">
        <span className={styles.cardIcon}>📗</span>
        <h3>文档中心</h3>
        <p>系统整理的技术笔记与分类文档</p>
      </Link>
      <Link className={styles.card} to="/docs/url-category/links">
        <span className={styles.cardIcon}>📜</span>
        <h3>收藏夹</h3>
        <p>精选的链接与资源合集</p>
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎访问 ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <QuickLinks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}