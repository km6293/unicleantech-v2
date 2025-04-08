'use client';

import React, { useState } from 'react';
import styles from './Section5.module.css';

interface Product {
  name: string;
  title: string;
  features: string[];
  price: string;
}

interface Products {
  optionA: Product[];
  optionB: Product[];
}

const Section5 = () => {
  const [selectedOption, setSelectedOption] = useState<'optionA' | 'optionB'>('optionA');

  const products: Products = {
    optionA: [
      {
        name: 'Basic',
        title: '베이직 상품 A',
        features: ['단순복사', '메뉴얼 제공', '간단한 수정'],
        price: '30만원'
      },
      {
        name: 'Standard',
        title: '스탠다드 상품',
        features: ['페이지 추가 작업', '템플릿 구조 수정 작업', 'SEO 작업', '단순복사', '메뉴얼 제공'],
        price: '50만원'
      },
      {
        name: 'Premium',
        title: '프리미엄 상품 A',
        features: ['100% 맞춤 제작', '고퀄리티 제작', 'SEO 작업', '메뉴얼 제공', '기능 추가'],
        price: '100만원'
      }
    ],
    optionB: [
      {
        name: 'Basic',
        title: '베이직 상품 B',
        features: ['단순복사', '메뉴얼 제공', '간단한 수정'],
        price: '40만원'
      },
      {
        name: 'Standard',
        title: '스탠다드 상품',
        features: ['페이지 추가 작업', '템플릿 구조 수정 작업', 'SEO 작업', '단순복사', '메뉴얼 제공'],
        price: '70만원'
      },
      {
        name: 'Premium',
        title: '프리미엄 상품 B',
        features: ['100% 맞춤 제작', '고퀄리티 제작', 'SEO 작업', '메뉴얼 제공', '기능 추가'],
        price: '150만원'
      }
    ]
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>다양한 상품이 준비되어 있습니다.</h2>
      <p className={styles.subtitle}>원하시는 상품을 찾아보세요!</p>
      
      <div className={styles.toggleContainer}>
        <button 
          className={`${styles.toggleButton} ${selectedOption === 'optionA' ? styles.active : ''}`}
          onClick={() => setSelectedOption('optionA')}
        >
          옵션A
        </button>
        <button 
          className={`${styles.toggleButton} ${selectedOption === 'optionB' ? styles.active : ''}`}
          onClick={() => setSelectedOption('optionB')}
        >
          옵션B
        </button>
      </div>

      <div className={styles.productsContainer}>
        {products[selectedOption].map((product: Product, index: number) => (
          <div key={index} className={styles.productCard}>
            <h3 className={styles.productName}>{product.name}</h3>
            <h4 className={styles.productTitle}>{product.title}</h4>
            <div className={styles.features}>
              {product.features.map((feature: string, idx: number) => (
                <div key={idx} className={styles.feature}>
                  <input type="checkbox" checked readOnly />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className={styles.price}>{product.price}</div>
            <button className={styles.applyButton}>바로 신청하기</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5; 