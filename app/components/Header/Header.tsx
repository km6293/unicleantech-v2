'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = {
    '회사소개': ['인사말', '연혁', '오시는 길'],
    '사업분야': ['사업분야 디자인1', '사업분야 디자인2'],
    '제품소개': ['제품소개'],
    '고객지원': ['공지사항', '뉴스', '자주묻는질문', '문의하기'],
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCategoryClick = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      setActiveCategory(activeCategory === category ? null : category);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="유니클린텍 로고" 
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>
        
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="메뉴"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.active : ''}`}>
          {Object.entries(menuItems).map(([category, subItems]) => (
            <div
              key={category}
              className={styles.menuItem}
            >
              <button
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={(e) => handleCategoryClick(category, e)}
              >
                {category}
                <svg 
                  className={styles.arrowIcon} 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`${styles.dropdown} ${activeCategory === category ? styles.active : ''}`}>
                {subItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${category.toLowerCase()}/${item.toLowerCase().replace(/ /g, '-')}`}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveCategory(null);
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link 
            href="/contact" 
            className={styles.contactButton}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setActiveCategory(null);
            }}
          >
            문의하기
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 