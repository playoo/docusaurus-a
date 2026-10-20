import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import MountainSvg from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeSvg from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactSvg from '@site/static/img/undraw_docusaurus_react.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易用',
    Svg: MountainSvg,
    description: (
      <>
        Docusaurus 从零开始设计，便于安装和快速运行你的网站。
      </>
    ),
  },
  {
    title: '专注于重要的事情',
    Svg: TreeSvg,
    description: (
      <>
        Docusaurus 让你专注于文件，我们来做家务。可以把你的文档移到文档目录里。
      </>
    ),
  },
  {
    title: '由 React 驱动',
    Svg: ReactSvg,
    description: (
      <>
        通过重复使用 React 来扩展或自定义你的网站布局。Docusaurus 可以在重复使用相同的页眉和页脚的同时进行扩展。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
          aria-label={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}