import React, { useEffect, useRef } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import pdf from "../pdf/Shaswat Narayan.pdf"
import Typed from "typed.js";

export const Hero = () => {


  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Shaswat Narayan",
        "I'm Frontend developer",
        
      ],
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content} >
        <h1 className={styles.title} ></h1>
        <h1 className={styles.description } ref={typedRef} >
        </h1>
        <a className = {styles.resumeBtn} href={pdf} download="Shaswat's Resume" >Download Resume</a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
