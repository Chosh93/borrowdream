import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import AxiosApi from "../../api/axiosapi";
import styled from "styled-components";
import {SiStarship} from "react-icons/si"

const Wrap = styled.div`
    width: 1000px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;
    font-family:'bitbit';


    .title {
        display: flex;
        align-items: center;
        font-size: 30px;
        font-weight: 600;
        color: #1a5d98;
        h2 {margin-left: 10px; font-size: 35px; margin-top: 35px; font-weight: 500; color: #135CD2; }
    }   

    .info-container{
        > h3{
            font-size: 2rem;
            color: #7F8EEF;
        }
        >h4{
            color: #7F8EEF;
            font-size: 1.5rem;
        }
        > ul > li > span {
            font-size: 1.2rem;
            color: #135CD2;
        }

    }

    .mainbutton-container {
        margin-top: 20px;
        height: 55px;
        text-align: right;
        .btn {
            margin-left: 10px;
            cursor: pointer;
            font-weight: 600;
            float: right;
            font-size: 16px;
            font-weight: lighter;
            padding: 8px 35px;
            border-radius: 25px;
            background-color: #135CD2;
            color: white;
            border: none;
            transition: all .1s ease-in;
            &:hover {background-color:  #a1f7d9; color: #135CD2;}
        }
    }

    table{
      font-family: 'bitbit';
    clear: both;
    min-width: 920px;
    width: 100%;
    text-align: center;
    background: #fff;
    border-collapse: collapse; 
        width:100%;
        background-color: #4555AE;
        border-bottom: solid 1px #bbb;
        text-align: center;
        th {color: white; border-top: solid 1px #4555AE; border-bottom: 1px solid #bbb; background-color: #7F8EEF;}
      
        td {padding: 10px; background-color: white; border-left: solid 1px #bbb;  color: #135CD2;}
        td:first-child {border-left: none; width: 200px;}
        td:nth-child(2) {width: 10rem;}  
        td:nth-child(3) {width: 10rem;}  
        td:nth-child(4) {width: 10rem;
        
          
          align-items: center;
          input {
            text-align: center;
            width: 3rem;
          }
        }
        td:nth-child(5) {width: 10rem}
    }

`;
const ProductOrder = () => {
    const location = useLocation();
    const { productName } = location.state;
    const [productInfo, setProductInfo] = useState('')
    const Id = window.localStorage.getItem("Id");
    const [userInfo, setUserInfo] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    console.log(productName);
    console.log(userInfo);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    useEffect(() => {
        const cusData = async () => {
            setLoading(true);
            try {
                const response = await AxiosApi.customEdit(Id);
                setUserInfo(response.data);
                console.log(userInfo);
                const encodedProductName = encodeURIComponent(productName);
                const response2 = await AxiosApi.productOrder(encodedProductName);
                setProductInfo(response2.data);
                console.log(productInfo);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        cusData();
    }, [Id]);
    
    console.log(productInfo);
    
    return(
    <></>
    )
}
export default ProductOrder;
