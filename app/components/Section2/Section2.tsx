'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Section2.module.css';
import Image from 'next/image';
const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleVideos] = useState<boolean[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !circleRef.current) return;

      const section = sectionRef.current;
      const circle = circleRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visibleRatio = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      const circlePosition = visibleRatio * 100;
      circle.style.transform = `translateY(${circlePosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const videoCards = document.querySelectorAll(`.${styles.videoCard}`);
    videoCards.forEach((card) => observer.observe(card));

    return () => {
      videoCards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const videos = [
    {
      id: 'video1',
      title: '유니클린테크 소개',
      thumbnail: 'https://img.youtube.com/vi/uRxUuDn5Roo/maxresdefault.jpg',
      url: 'https://www.youtube.com/shorts/uRxUuDn5Roo'
    },
    {
      id: 'video2',
      title: '유니클린테크 서비스',
      thumbnail: 'https://img.youtube.com/vi/E4y_z9FgNyY/maxresdefault.jpg',
      url: 'https://www.youtube.com/shorts/E4y_z9FgNyY'
    },
    {
      id: 'video3',
      title: '유니클린테크 제품',
      thumbnail: 'https://img.youtube.com/vi/ccfpQ91wUFA/maxresdefault.jpg',
      url: 'https://www.youtube.com/shorts/ccfpQ91wUFA'
    },
    // {
    //   id: 'video4',
    //   title: '유니클린테크 기술',
    //   thumbnail: 'https://img.youtube.com/vi/t5iryj3Hnxg/maxresdefault.jpg',
    //   url: 'https://www.youtube.com/shorts/t5iryj3Hnxg'
    // }
  ];

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={circleRef} className={styles.backgroundCircle} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          유니클린테크의<br />
          다양한 영상 콘텐츠
        </h2>
        <p className={styles.description}>
          유니클린테크의 제품과 서비스를 소개하는 다양한 영상 콘텐츠를 만나보세요.
        </p>
        
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`${styles.videoCard} ${visibleVideos[index] ? styles.visible : ''}`}
              ref={el => {
                videoRefs.current[index] = el;
              }}
            >
              <div className={styles.videoContent}>
                <div className={styles.videoThumbnail}>
                  {visibleVideos[index] ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.url.split('/').pop()}?autoplay=1&mute=1&controls=0&playsinline=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Image src={video.thumbnail} alt={video.title} fill />
                  )}
                </div>
                <h3 className={styles.videoTitle}>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2; 