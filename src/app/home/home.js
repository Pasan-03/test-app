"use client";      
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
          <li><Link href="/start-studying">Start Studying</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="#">Modules</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
        <div className={styles.navbarButtons}>
          <Link href="/login">
            <button className={styles.signIn}>Sign In</button>
          </Link>
          <Link href="/register">
            <button className={styles.register}>Register</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.overlay}>
          <h1>Welcome to Gen Z EduNet</h1>
        </div>
        <Image src="/banner.jpg" alt="Hero banner for Gen Z EduNet" className={styles.heroImage} layout="responsive" width={1920} height={1080} />
      </section>

      {/* Slogan Section */}
      <section className={styles.sloganSection}>
        <p>"Empowering students to excel with innovative learning tools."</p>
      </section>

      {/* Buttons Row Section */}
      <section className={styles.buttonsSection}>
        <button className={styles.eduButton}>ED EXCEL</button>
        <button className={styles.eduButton}>CAMBRIDGE</button>
        <button className={styles.eduButton}>O/L</button>
        <button className={styles.eduButton}>A/L</button>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <div className={styles.visionContent}>
          <Image src="/banner.jpg" alt="Vision of EduFusion" className={styles.visionImage} width={500} height={300} />
          <div className={styles.visionText}>
            <p>
              "At EduFusion, we envision a world where educators are equipped with innovative tools that foster collaboration and engagement, transforming the educational experience into one of excellence."
            </p>
            <input type="text" placeholder="Search courses..." className={styles.coursesSearch} />
          </div>
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className={styles.expertsSection}>
        <h2>Meet Our Experts</h2>
        <div className={styles.expertsContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={styles.expertCard}>
              <Image src="/banner.jpg" alt={`Expert ${index + 1}`} width={150} height={150} className={styles.expertImage} />
              <p>"EduFusion has streamlined my teaching approach, making lessons more engaging and interactive."</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <h2>What Our Students Are Saying</h2>
        <div className={styles.testimonialContainer}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.testimonialCard}>
              <Image src="/banner.jpg" alt={`Student ${index + 1}`} width={150} height={150} className={styles.testimonialImage} />
              <p>"EduFusion has transformed my learning experience. The interactive content keeps me engaged and motivated!"</p>
              <h4>{`Student ${index + 1}`}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h4>EduFusion</h4>
              <p>Empowering the next generation with innovative learning tools.</p>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <h4>Use Cases</h4>
              <ul>
                <li><a href="#">UI Design</a></li>
                <li><a href="#">UX Design</a></li>
                <li><a href="#">Wireframing</a></li>
                <li><a href="#">Brainstorming</a></li>
                <li><a href="#">Online Whiteboard</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Design</a></li>
                <li><a href="#">Prototyping</a></li>
                <li><a href="#">Development Features</a></li>
                <li><a href="#">Collaboration Features</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Best Practices</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Developer Docs</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2024 EduFusion. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
