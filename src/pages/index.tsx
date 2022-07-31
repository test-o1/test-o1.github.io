import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const svgScale = '80%';

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
  });
  useEffect(() => (window.onresize = updateSize), []);

  const bannerUrl = size.x > 800 ? '/img/logo-banner-desktop.svg' : '/img/logo-banner-mobile.svg';

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

      <img
          className={styles.featureSvg} width={svgScale} height={svgScale}
          alt='A photo organizer for your file system without sticking to any application or vendor'
          src={useBaseUrl(bannerUrl)}
        />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro-examples">
            photo-cli tutorial & examples
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="A photo organizer for your file system without sticking to any application or vendor. Extract when and where (reverse geocoding) your photos are taken, copy into a new organized folder with various folder & file naming strategies, export into CSV files.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}