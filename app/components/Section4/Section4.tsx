import React from 'react';
import styles from './Section4.module.css';

const Section4 = () => {
  const sections = [
    {
      title: "트랜디하고 아름다운 홈페이지 템플릿을 만듭니다.",
      description: "실제 300만원에 제작된 홈페이지들을 30만원 템플릿으로 만들었습니다. 300만원 홈페이지를 10분의 1 가격에 드립니다. 홈페이지 템플릿은 저렴해 보인다는 틀을 깹니다.",
      image: "/images/hero-image.jpg",
      isReversed: false
    },
    {
      title: "트랜디하고 아름다운 홈페이지 템플릿을 만듭니다.",
      description: "실제 300만원에 제작된 홈페이지들을 30만원 템플릿으로 만들었습니다. 300만원 홈페이지를 10분의 1 가격에 드립니다. 홈페이지 템플릿은 저렴해 보인다는 틀을 깹니다.",
      image: "/images/hero-image.jpg",
      isReversed: true
    },
    {
      title: "트랜디하고 아름다운 홈페이지 템플릿을 만듭니다.",
      description: "실제 300만원에 제작된 홈페이지들을 30만원 템플릿으로 만들었습니다. 300만원 홈페이지를 10분의 1 가격에 드립니다. 홈페이지 템플릿은 저렴해 보인다는 틀을 깹니다.",
      image: "/images/hero-image.jpg",
      isReversed: false
    }
  ];

  return (
    <section className={styles.section}>
      {sections.map((section, index) => (
        <div key={index} className={`${styles.content} ${section.isReversed ? styles.reversed : ''}`}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{section.title}</h2>
            <p className={styles.description}>{section.description}</p>
            <button className={styles.button}>바로 시작하기</button>
          </div>
          <div className={styles.imageContainer}>
            <img src={section.image} alt={`Template ${index + 1}`} className={styles.image} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section4; 