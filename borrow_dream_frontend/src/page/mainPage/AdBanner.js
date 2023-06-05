import React, { useState, useEffect } from 'react';
import friday from "../../Image/배너/블랙프라이데이.png";
import summer from "../../Image/배너/미리여름.png";
import summer2 from "../../Image/배너/여름옷.png";
import './styles.css';

const AdBanner = () => {
    const [currentAd, setCurrentAd] = useState(0);
  const ads = [friday, summer, summer2];
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [ads.length, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handlePrevAd = () => {
    setCurrentAd((prevAd) => (prevAd - 1 + ads.length) % ads.length);
  };

  const handleNextAd = () => {
    setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
  };

  return (
    <div className="mainBanner">
        <img className="mainBanner-img" src={ads[currentAd]} alt="advertisement" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <button className='mainBanner-pre-button' onClick={handlePrevAd}>&lt;</button> {/* 이전 광고 버튼 */}
        <button className='mainBanner-next-button' onClick={handleNextAd}>&gt;</button> {/* 다음 광고 버튼 */}
    </div>
  );
};
export default AdBanner;