import {useMemo, type ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import MountainSvg from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeSvg from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactSvg from '@site/static/img/undraw_docusaurus_react.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  quotes: string[]; // 励志句子池
};

const FeatureList: FeatureItem[] = [
  {
    title: '努力🥇',
    Svg: MountainSvg,
    quotes: [
      '你只管努力，剩下的交给时间。',
      '星光不问赶路人，时光不负有心人。',
      '所有的努力，都不会被辜负。',
      '越努力，越幸运。',
    ],
  },
  {
    title: '坚持🥈',
    Svg: TreeSvg,
    quotes: [
      '坚持一件能让自己变好的事，的确不容易。',
      '打磨自己的过程总是充满艰难和迷茫。',
      '只要你朝前走，即使失败，也是经历。',
      '日拱一卒，功不唐捐。',
    ],
  },
  {
    title: '行动🥉',
    Svg: ReactSvg,
    quotes: [
      '别想了，去做。',
      '行动，是改变唯一的入口。',
      '想一千次，不如做一次。',
      '种一棵树最好的时间是十年前，其次是现在。',
    ],
  },
];

// 随机取一条
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

function Feature({title, Svg, quotes}: FeatureItem) {
  // useMemo 保证同一次渲染内句子稳定，不会因父组件重渲染而跳变
  const quote = useMemo(() => pick(quotes), [quotes]);

  return (
    <div className="col col--4">
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-label={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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