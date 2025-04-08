import Image from "next/image";
import style from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  const DATA = [
    {
      href: "https://www.instagram.com/clean_young_people?igsh=MXFzbDN1MTg0dmVpNA%3D%3D&utm_source=qr",
      src: "/svg/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCfA5jx1Ak5sHsZPatOWd3xg",
      src: "/svg/youtube.svg",
      alt: "Youtube",
    },
    {
      href: "https://www.tiktok.com/@unicleantech?_t=8qG4iWxvLBX&_r=1",
      src: "/svg/tiktok.svg",
      alt: "Tiktok",
    },
    {
      href: "https://blog.naver.com/unicleantech",
      src: "/svg/naver.svg",
      alt: "Naver",
    },
  ];

  const menuItems = {
    '회사소개': ['인사말', '연혁', '오시는 길'],
    '사업분야': ['사업분야 디자인1', '사업분야 디자인2'],
    '제품소개': ['제품소개'],
    '고객지원': ['공지사항', '뉴스', '자주묻는질문', '문의하기'],
  };

  return (
    <footer className={style.footer}>
      <section>
        <span>
          <p>견적 문의 번호: 1599-1234</p>
          <p>FAX번호: 0504-123-1234</p>
          <p>이메일: 유니클린텍@gmail.com</p>
        </span>
        <div>
          {DATA.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialLink}
            >
              <Image src={item.src} alt={item.alt} width={32} height={32} />
            </Link>
          ))}
        </div>
      </section>
      <hr />
      <address>
        Copyright ©2024 유니클린텍 All rights Reserved | 대표: 박찬엽 |
        사업자등록번호: 123-45-67890
      </address>
    </footer>
  );
}
