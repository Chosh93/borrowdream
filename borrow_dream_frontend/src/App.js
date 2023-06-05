import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './page/mainPage/Main';
import Header from './page/mainPage/Header';
import Board from './page/InquiryBoard/Board';
import WriteInquiry from './page/InquiryBoard/WriteInquiry';
import InquiryView from './page/InquiryBoard/ViewInquiry';
import EditInquiry from './page/InquiryBoard/EditInquiry';
import FAQ from './page/QnABoard/qna';
import IntroCompany from './page/service/IntroCom';
import ReviewList from './page/reviewBoard/ReviewBoard';
import ViewReview from './page/reviewBoard/ViewReview';
import WriteReview from './page/reviewBoard/WriteReview';
import EditReview from './page/reviewBoard/EditReview';
import MyLentItemList from './page/MyLentItem/MyList';
import LentWrite from './page/MyLentItem/LentWrite';
import ViewLentItem from './page/MyLentItem/ViewLentItem';
import Login from './page/customInfo/login';
import Join from './page/customInfo/join';
import Find from './page/customInfo/find';
import FindPwd from './page/customInfo/findpwd';
import Mypage from './page/customInfo/mypage';
import MypageInfo from './page/customInfo/mypageInfo';
import MypageEdit from './page/customInfo/mypageEdit';
import CustomDelete from './page/customInfo/customdelete';
import Carrier from './page/Sub.Category/Carrier';
import Camera from './page/Sub.Category/Camera';
import Basket from './page/basket/basket';
import Order from './page/order/order';
import { Payment } from './page/payment/payment';
import ProductOrder from './page/payment/productOrder';
import ProductDetail from './page/Sub.Category/data/ProductDetail';
import Devices from './page/Sub.Category/Devices';
import Travel from './page/Sub.Category/Travel';
import Hiking_bag from './page/Sub.Category/Hiking_bag'
import Hiking_boots from './page/Sub.Category/Hiking_boots';
import Hiking_clothes from './page/Sub.Category/Hiking_clothes';
import Hiking_other from './page/Sub.Category/Hiking_other';
import Swimsuit from './page/Sub.Category/Swimsuit';
import Snorkel from './page/Sub.Category/Snorkel';
import Fillper from './page/Sub.Category/Fillper';
import Water_other from './page/Sub.Category/Water_other';
import Tent from './page/Sub.Category/Tent';
import Sleep from './page/Sub.Category/Sleep';
import Cooking from './page/Sub.Category/Cooking';
import Camping_other from './page/Sub.Category/Camping_other';
import Ct_pages from './page/Sub.Category/data/Ct_pages';
import ViewMsgList from './page/message/ReceiveMsgView';
import SendMsgList from './page/message/SendmsgView';
import UserStore from './context/userInfo';
import Footer from './page/mainPage/Footer';

function App() {
  const [cart, setCart] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [checkedAll, setCheckedAll] = useState(false); // 전체 선택 체크박스 상태
    const [checkedItems, setCheckedItems] = useState([]); // 개별 선택 체크박스 상태
    const convertPrice = (price) => {
      if (price === undefined || isNaN(price)) return '';
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
    <UserStore>
      <Router>
        <Header/>
          <Routes>
            {/* 메인 */}
            <Route path='/' element={<MainPage/>} />
            {/* 로그인 */}
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Join" element={<Join/>}/>
            <Route path="/Find" element={<Find/>}/>
            <Route path="/FindPwd" element={<FindPwd/>}/>
            <Route path="/Mypage" element={<Mypage/>}/>
            <Route path="/MypageInfo" element={<MypageInfo/>}/>
            <Route path="/MypageEdit" element={<MypageEdit/>}/>
            <Route path="/CustomDelete" element={<CustomDelete/>}/> 
            {/* 문의게시판 */}
            <Route path='/board-list' element={<Board/>}/>
            <Route path='/board-list/write' element={<WriteInquiry/>}/>
            <Route path="/board-list/write" element={<WriteInquiry/>}/>   
            <Route path="/board-list/inquiry-view/:no" element={<InquiryView/>}/>
            <Route path='/board-list/inquiry-edit/:no' element={<EditInquiry/>}/>
            {/* QnA게시판 */}
            <Route path="/qna-list" element={<FAQ/>}/>
            {/* 회사소개 */}
            <Route path="/service" element={<IntroCompany/>}/>
            {/* 리뷰게시판 */}
            <Route path="/review-list" element={<ReviewList/>}/>
            <Route path="/review-list/review/:no" element={<ViewReview/>}/>
            <Route path="/review-write" element={<WriteReview/>}/>
            <Route path="/review-edit/:no" element={<EditReview/>}/>
            {/* 내빌드 */}
            <Route path="/myLentItem" element={<MyLentItemList/>}/>
            <Route path="/myLentItem/write" element={<LentWrite/>}/>
            <Route path="/myLentItem/:no" element={<ViewLentItem/>}/>

            {/* 쪽지 */}
            <Route path="/sendList/:no" element={<SendMsgList/>}/>           
            <Route path="/receiverList/:no" element={<ViewMsgList/>}/>
            {/* 상품페이지 */}
            <Route path='/Ct_pages' element={<Ct_pages/>} />
            <Route path='/product/:pno' element={<ProductDetail cart={cart} setCart={setCart} convertPrice={convertPrice}/>} />
            <Route path='/carrier' element={<Carrier/>}/>
            <Route path='/camera' element={<Camera/>}/>
            <Route path='/devices' element={<Devices/>}/>
            <Route path='/Travel' element={<Travel/>}/>
            {/* ----------- */}
            <Route path='/hiking_bag' element={<Hiking_bag/>}/>
            <Route path='/hiking_boots' element={<Hiking_boots/>}/>
            <Route path='/hiking_clothes' element={<Hiking_clothes/>}/>
            <Route path='/hiking_other' element={<Hiking_other/>}/>
            {/*  */}
            <Route path='/swimsuit' element={<Swimsuit/>}/>
            <Route path='/snorkel' element={<Snorkel/>}/>
            <Route path='/fillper' element={<Fillper/>}/>
            <Route path='/water_other' element={<Water_other/>}/>
            {/*  */}
            <Route path='/Tent' element={<Tent/>}/>
            <Route path='/Sleep' element={<Sleep/>}/>
            <Route path='/Cooking' element={<Cooking/>}/>
            <Route path='/camping_other' element={<Camping_other/>}/>
            {/* 장바구니 */}
            <Route path='/cart/:no' element= {<Basket cart={cart} setCart={setCart} checkedAll={checkedAll} setCheckedAll={setCheckedAll} checkedItems={checkedItems} setCheckedItems={setCheckedItems} convertPrice={convertPrice}/>} />
            {/* 주문내역 */}
            <Route path='/order/:id' element={<Order orderList={orderList} setOrderList={setOrderList} convertPrice={convertPrice}/>} />
            {/* 결제정보 */}
            <Route path='/payment' element={<Payment cart={cart} setCart={setCart} orderList={orderList} setOrderList={setOrderList} checkedItems={checkedItems} setCheckedItems={setCheckedItems} convertPrice={convertPrice} />} />
            <Route path='/productOrder' element={<ProductOrder convertPrice={convertPrice}/> } />
          </Routes>
          <Footer/>
        </Router>
    </UserStore>
  );
}

export default App;
