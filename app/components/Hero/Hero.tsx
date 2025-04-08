'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            프리미엄<br />
            홈페이지 템플릿,<br />
            십분의일
          </h1>
          <div className={styles.buttonGroup}>
            <Link href="/start" className={styles.primaryButton}>
              바로 시작하기
            </Link>
            <Link href="/learn-more" className={styles.secondaryButton}>
              더 알아보기
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/hero-image.jpg"
            alt="Modern workspace with laptop and coffee"
            fill
            className={styles.heroImage}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 