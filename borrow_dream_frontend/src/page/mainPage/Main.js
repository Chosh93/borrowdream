import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiSuitcase2Fill } from "react-icons/ri";
import { FaMountain } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import Card2 from "../Sub.Category/data/Card2";
import B1 from "../../Image/배너/Borrow Dream 05220701 전 품목10.png";
import B2 from "../../Image/배너/Borrow Dream 05220701 전 품목10 (1).png";
import { SiStarship } from "react-icons/si";
import AdBanner from "./AdBanner";

const MainPage = () => {  
    const scrollToSection = () => {
      scroll.scrollTo(150); 
    }
    const scrollToSection2 = () => {
      scroll.scrollTo(900); 
    }
    const scrollToSection3 = () => {
      scroll.scrollTo(1500); 
    }
    const scrollToSection4 = () => {
      scroll.scrollTo(2200); 
    }
    return(
        <>
        <AdBanner/>
        <div className="mainCategory"> 
          <div className="abroad">
            <Link to="/Ct_pages" onClick={scrollToSection}>
              <RiSuitcase2Fill size="100" color="white" />
            </Link>
            <p>해외여행</p>
          </div>
          <div className="mountain">
            <Link to="/Ct_pages" onClick={scrollToSection2}>
              <FaMountain size="100" color="white" />
            </Link>
            <p>산(트래킹)</p>
          </div>

          <div className="swimming">
            <Link to="/Ct_pages"onClick={scrollToSection3}>
              <MdPool size="100" color="white" />
            </Link>
            <p>물놀이</p>
          </div>

          <div className="camping">
            <Link to="/Ct_pages"onClick={scrollToSection4}>
              <GiCampingTent size="100" color="white" />
            </Link>
            <p>캠핑</p>
          </div>

          <div className="my">
            <Link to="/Borrow_Dream">
              <SiStarship size="100" color="white" />
            </Link>
            <p>Borrow <br /> Dream</p>
          </div>
        </div>
        <div className="company">
        <img src={B1} />
        </div>
        <div className="naebild">
        <img className="Bimg" src={B2} />
        </div>
        <div>
        <span><BsStars size="50" color="#7F8EEF"/>인기품목</span>
        <Card2 categoryNo={5000} />
        </div>
    </>
    )
}
export default MainPage;