import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const socialLinks = {
    facebook: "https://www.facebook.com/people/lellahom-%D9%84%D9%84%D8%A7%D9%87%D9%85/61558160653228/#",
    instagram: "https://www.instagram.com/lellahom4/",
    tiktok: "https://www.tiktok.com/@lellahom4?_t=ZM-8xN7hpCsCs4&_r=1"
  };

  const contactInfo = {
    phone: "+216 56 295 111",
    email: "lellahomllahm@gmail.com"
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="https://res.cloudinary.com/dlz4nxlct/image/upload/v1750449431/Photoroom-20250419_204550_djuvdt.png"
            alt="Lellehom Store logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Bienvenue chez Lellehom Store !</h1>
        </div>

        <div className={styles.linksContainer}>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </a>

          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            TikTok
          </a>

          <a
            href={`tel:${contactInfo.phone}`}
            className={`${styles.linkButton} social-button phone`}
          >
            <svg className={`${styles.linkIcon} social-icon`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {contactInfo.phone}
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className={`${styles.linkButton} social-button email`}
          >
            <svg className={`${styles.linkIcon} social-icon`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {contactInfo.email}
          </a>
        </div>
      </main>
    </div>
  );
}