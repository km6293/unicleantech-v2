"use client";

import { useState, useRef } from "react";
import styles from "./Section3.module.css";

interface Review {
  id: number;
  name: string;
  content: string;
  rating: number;
}

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "김철수",
      content:
        "유니클린테크의 서비스는 정말 만족스러웠습니다. 친절한 상담과 신속한 처리로 큰 도움이 되었어요. 특히 제품 설치 과정에서 발생한 문제를 빠르게 해결해주셔서 감사했습니다. 앞으로도 계속 이용할 예정입니다.",
      rating: 5,
    },
    {
      id: 2,
      name: "이영희",
      content:
        "제품 품질이 매우 좋고, A/S도 빠르게 처리해주셔서 감사했습니다. 다른 업체와 비교해봐도 가격 대비 성능이 뛰어나고, 고객 서비스도 훌륭합니다. 주변 지인들에게도 추천하고 있습니다.",
      rating: 5,
    },
    {
      id: 3,
      name: "박민수",
      content:
        "가격 대비 성능이 매우 뛰어납니다. 다른 업체와 비교해봐도 최고의 선택이었어요. 설치부터 A/S까지 모든 과정이 만족스러웠고, 특히 기술 지원이 매우 전문적이었습니다.",
      rating: 5,
    },
    {
      id: 4,
      name: "정지은",
      content:
        "친절한 상담과 전문적인 기술로 문제를 해결해주셨습니다. 다음에도 이용할 예정입니다. 특히 제품 사용 중 발생한 문제를 신속하게 해결해주셔서 매우 만족스러웠습니다.",
      rating: 5,
    },
    {
      id: 5,
      name: "최동욱",
      content:
        "설치부터 A/S까지 모든 과정이 만족스러웠습니다. 특히 기술력이 뛰어나네요. 제품 품질도 좋고, 고객 서비스도 훌륭합니다. 앞으로도 계속 이용할 예정입니다.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setTranslateX(0);
  };

  const getVisibleReviews = () => {
    const prevPrevIndex =
      currentIndex === 0
        ? reviews.length - 2
        : currentIndex === 1
        ? reviews.length - 1
        : currentIndex - 2;
    const prevIndex =
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % reviews.length;
    const nextNextIndex = (currentIndex + 2) % reviews.length;
    return [
      reviews[prevPrevIndex],
      reviews[prevIndex],
      reviews[currentIndex],
      reviews[nextIndex],
      reviews[nextNextIndex],
    ];
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          십분의일을 경험하신 200명이 넘는
          <br />
          고객분들이 만족하셨습니다!
        </h2>

        <div
          className={styles.carousel}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleReviews().map((review, index) => (
            <div
              key={review.id}
              className={styles.reviewCard}
              style={{
                transform: `translateX(0) scale(${
                  index === 2
                    ? "1"
                    : index === 1 || index === 3
                    ? "0.9"
                    : "0.85"
                })`,
                opacity:
                  index === 2
                    ? "1"
                    : index === 1 || index === 3
                    ? "0.8"
                    : "0.7",
                zIndex:
                  index === 2 ? "3" : index === 1 || index === 3 ? "2" : "1",
              }}
            >
              <div className={styles.reviewContent}>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={styles.star}>
                      ★
                    </span>
                  ))}
                </div>
                <p className={styles.reviewText}>{review.content}</p>
                <p className={styles.reviewerName}>{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={handlePrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.controlButton} onClick={handleNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
