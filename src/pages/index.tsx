import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  console.log(styles);
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

      <img
          className={styles.featureSvg}
          alt='A photo organizer for your file system without sticking to any application or vendor'
          src={useBaseUrl('/img/logo-dark.svg')}
        />

        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            photo-cli tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`tessst- ${siteConfig.title}`}
      description="A photo organizer for your file system without sticking to any application or vendor. Extract when and where (reverse geocoding) your photos are taken, copy into a new organized folder with various folder & file naming strategies, export into CSV files.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}