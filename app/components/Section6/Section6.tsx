'use client';

import React, { useState } from 'react';
import styles from './Section6.module.css';
import Image from 'next/image';
const Section6 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '코딩 지식이 전혀 없어도 수정할 수 있나요?',
      answer: '네, 코딩 지식이 전혀 없는 분들도 손쉽게 문구와 이미지를 수정하실 수 있도록 메뉴얼을 제공하고 있습니다. 메뉴얼에는 영상도 담겨있으니 보시면서 그대로 따라하시면 됩니다. 지금까지 구매하신 모든 분들이 저에게 따로 질문하지 않고 쉽게 수정하셨습니다.'
    },
    {
      question: '유지보수는 어떻게 되나요?',
      answer: '매달 돈을 내는 유지보수는 굳이 안하셔도 됩니다. 가끔 수정이 필요하실 때 저희에게 요청해주시면 처리해 드립니다. 그 외에 홈페이지 제작 후 따로 들어가는 비용은 없습니다.'
    },
    {
      question: '커스터마이징이 뭔가요?',
      answer: '템플릿에 있는 페이지 외에 다른 페이지나 기능을 추가하고 싶을 경우 저희에게 요청하는 것을 말합니다. 템플릿을 기준으로 제작이 되며, 원하시는 페이지와 기능에 따라 견적은 달라집니다.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>자주 여쭤보시는 질문들입니다.</h2>
      
      <div className={styles.content}>
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              <div className={`${styles.accordionContent} ${activeIndex === index ? styles.active : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.imageContainer}>
          <Image src="/images/hero-image.jpg" alt="FAQ" className={styles.image} fill />
        </div>
      </div>
    </section>
  );
};

export default Section6; 