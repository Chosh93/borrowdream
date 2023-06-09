import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import React, { Component } from 'react';
import axios from 'axios';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 97px;
  
  .day{
    position: relative;
    right: 200px;
    top: 25px;
    
  }
  .total{
    position: relative;
    bottom: 49px;
    color: orangered;
  }
`;

const DateLabel = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-left: 200px; 
`;

class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      totalDays: 0,
      totalPrice: 0, // 초기값은 0으로 설정
    };
  }

  onRangeChange = async (ranges) => {
    const startDate = ranges['selection'].startDate;
    const endDate = ranges['selection'].endDate;
    const totalDays = parseInt(Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))+1);
    const totalPrice = this.calculatePriceByDate(startDate, endDate);

    this.setState({
      startDate,
      endDate,
      key: ranges['selection'].key,
      totalDays,
      totalPrice,
    });
    this.props.setPdStartDate(startDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-'));
    this.props.setPdEndDate(endDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-'));
  };


  calculatePriceByDate = (startDate, endDate) => {
    const { productPrice } = this.props; // props로 전달된 productPrice 값 가져오기
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // 1을 더하지 않음
    const preTotalPrice = parseInt(productPrice.replace(/,/g, ""), 10) * (days + 1); // 가격 계산에 1을 더해줌
    const totalPrice = preTotalPrice.toLocaleString();
    this.props.setDayCnt(days+1);
    return totalPrice;
  };
  

  render() {
    return (
      <CalendarContainer>
        <DateRange
          editableDateInputs={true}
          onChange={this.onRangeChange}
          moveRangeOnFirstSelection={false}
          ranges={[this.state]}
          locale={ko}
        />
        <div className=' day'>
        <DateLabel>물건 대여: {this.state.startDate.toLocaleDateString()}</DateLabel>
        <DateLabel>물건 반납: {this.state.endDate.toLocaleDateString()}</DateLabel>
        </div>
        <div className='total'>
        <DateLabel>총 일 수: {this.state.totalDays}일</DateLabel>
        <DateLabel>총 가격: {this.state.totalPrice}원</DateLabel>
        </div>
      </CalendarContainer>
    );
  }
}

export default CalendarComponent; 