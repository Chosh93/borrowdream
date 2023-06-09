import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";

import styled from "styled-components";
import {SiStarship} from "react-icons/si";
import {TbPlaneDeparture} from "react-icons/tb"
import {GiMountains} from "react-icons/gi"
import {TbBeach} from "react-icons/tb"
import {FaCampground} from "react-icons/fa"

import { animateScroll as scroll } from "react-scroll";


// 주소 변경
import cr from "../../../Image/카테고리이미지/캐리어.jpg";
import cm from "../../../Image/카테고리이미지/카메라.jpg";
import dv from"../../../Image/카테고리이미지/전자기기.jpg";
import ot1 from "../../../Image/카테고리이미지/기타1.jpg";
import beg from "../../../Image/카테고리이미지/등산가방.jpg";
import ms from "../../../Image/카테고리이미지/등산화.jpg";
import mc from "../../../Image/카테고리이미지/등산복.jpg";
import mcot from "../../../Image/카테고리이미지/등산기타.jpg";
import wg from "../../../Image/카테고리이미지/스노쿨.jpg";
import ws from "../../../Image/카테고리이미지/오리발.jpg";
import wc from "../../../Image/카테고리이미지/수영복.jpg";
import wot from "../../../Image/카테고리이미지/물놀이 기타.jpg";
import tt from "../../../Image/카테고리이미지/텐트.jpg";
import ti from "../../../Image/카테고리이미지/취사.jpg";
import ts from "../../../Image/카테고리이미지/침낭.jpg"
import toh from "../../../Image/카테고리이미지/캠핑기타.jpg";




const PopularItems = styled.div`
  font-size: 2rem;
  font-family: 'bitbit';
  font-weight: 100;
  .title-container {
    color: #7FC2EF;
    margin-bottom: 0;
    margin-top: 5rem;
    margin-left: 10rem;
  }

  .imgContainer {
    display: grid;
    grid-template-columns: repeat(4, 3fr); /* 변경된 부분: 가로 2개의 열 */
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 140px;
  }

  a {
    text-decoration: none;
  }

  .imgContainer > * {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
   
  }

  span {
    color: #1a5d98;
    margin-left: 10rem;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    h2{
      margin-left: 1rem;
    }
  }

 

  .img {
    flex-direction: column;
    align-items: center;
      .productName {
      font-size: 1.5rem;
      color: #7F8EEF;
      margin-top: 20px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
  .imgContainer {
    grid-template-columns: repeat(2, 1fr); /* 세로로 2열로 변경 */
  }
}
  @media (max-width: 500px){
    .imgContainer {
    grid-template-columns: 1fr; /* 1개의 컬럼을 가지도록 설정 */
  }
  }

`;

const Image = styled.img`
  display: flex;
  width: 240px;
  height: 240px;
  border-radius: 25px;
`;
const scrollToSection = () => {
  scroll.scrollTo(30); 
}

const Ct_pages = () => {
  return (
    <div className="categoryWrapper">
      <PopularItems>
        <span><SiStarship size="50" color="7F8EEF" /><h2>카테고리</h2></span>
        <div className="title-container"><TbPlaneDeparture size="30" />해외여행</div>
        <div className="imgContainer">
          <div className="img">
            <Link to="/Carrier" onClick={scrollToSection} className="img">
              <Image src={cr} />
            </Link>
            <div className="productName">캐리어</div>
          </div>
          <div className="img">
            <Link to="/Camera"onClick={scrollToSection} className="img">
              <Image src={cm} />
            </Link>
            <div className="productName"onClick={scrollToSection}>카메라</div>
          </div>
          <div className="img">
            <Link to="/Devices" className="img">
              <Image src={dv} />
            </Link>
            <div className="productName" onClick={scrollToSection}>전자기기</div>
          </div>
          <div className="img">
            <Link to="/Travel" className="img">
              <Image src={ot1} />
            </Link>
            <div className="productName">기타 해외여행 용품</div>
          </div>
          </div>
          <div className="title-container"><GiMountains size="30"/>산(하이킹)</div>
          <div className="imgContainer">
          <div className="img">
            <Link to="/hiking_bag" className="img">
              <Image src={beg} />
            </Link>
            <div className="productName">등산 가방</div>
          </div>
          <div className="img">
            <Link to="/hiking_boots" className="img">
              <Image src={ms} />
            </Link>
            <div className="productName">등산 신발</div>
          </div>
          <div className="img">
            <Link to="/hiking_clothes" className="img">
              <Image src={mc} />
            </Link>
            <div className="productName">등산복</div>
          </div>
          <div className="img">
            <Link to="/hiking_other" className="img">
              <Image src={mcot} />
            </Link>
            <div className="productName">기타 등산 용품</div>
          </div>
          </div>
          <div className="title-container"><TbBeach size="30"/>바다/물놀이</div>
          <div className="imgContainer">
          <div className="img">
            <Link to="/swimsuit" className="img">
              <Image src={wc} />
            </Link>
            <div className="productName">수영복</div>
          </div>
          <div className="img">
            <Link to="/snorkel" className="img">
              <Image src={wg} />
            </Link>
            <div className="productName">스노쿨</div>
          </div>
          <div className="img">
            <Link to="/fillper" className="img">
              <Image src={ws} />
            </Link>
            <div className="productName">오리발</div>
          </div>
          <div className="img">
            <Link to="/water_other" className="img">
              <Image src={wot} />
            </Link>
            <div className="productName">기타 물놀이 용품</div>
          </div>
          </div>
          <div className="title-container"><FaCampground size="30"/>캠핑</div>
          <div className="imgContainer">
          <div className="img">
            <Link to="/tent" className="img">
              <Image src={tt} />
            </Link>
            <div className="productName">텐트</div>
          </div>
          <div className="img">
            <Link to="/sleeping_gear" className="img">
              <Image src={ts} />
            </Link>
            <div className="productName">수면 용품</div>
          </div>
          <div className="img">
            <Link to="/cooking_tools" className="img">
              <Image src={ti} />
            </Link>
            <div className="productName">취사 도구</div>
          </div>
          <div className="img">
            <Link to="/camping_other" className="img">
              <Image src={toh} />
            </Link>
            <div className="productName">기타 캠핑 용품</div>
          </div>
        </div>
      </PopularItems>
    </div>
  );
};

export default Ct_pages;
