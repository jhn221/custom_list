import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as S from './styled'

interface list {
  userid: Number,
  RevDate: string,
  name: string,
  phone: string,
  patDob: string,
  memo:string
}

const Detail = () => {
  const [customer, setCustomer] = useState<list[]>([]);
  const selectedDate = localStorage.getItem("Date")
  const { id } = useParams();

  useEffect(()=> {
    axios
    .get(`http://34.22.82.239:8080/getUserList?date=${selectedDate}`)
    .then((res) => {
      setCustomer(res.data.users)
    })
    .catch((error) => {
      console.log(error);
    });
  },[selectedDate, id])


  const userDetail = customer.filter((customer) => Number(id) === customer.userid);

  //나이 및 성별 계산
  const nowDate = new Date();
  const userAge = Number(userDetail[0]?.patDob.substring(0,2)) > 23 ? Number(userDetail[0]?.patDob.substring(0,2)) + 1900 : Number(userDetail[0]?.patDob.substring(0,2)) + 2000 ;
  const age =  nowDate.getFullYear() - userAge;

  const gender = Number(userDetail[0]?.patDob.slice(7)) %2 === 0 ? "여자" : "남자";

  //날짜 형태 변경
  const year =  userDetail[0]?.RevDate.slice(2,4);
  const month = userDetail[0]?.RevDate.slice(5,6);
  const date = userDetail[0]?.RevDate.slice(6,8);


  return (
    <S.CustomerDetail>
        <S.Detail>              
          <div className="date">{year}년 {month}월 {date}일</div>
          <div className="name">이름 : {userDetail[0]?.name}</div>
          <div className="gender">성별 : {gender}</div>
          <div className="age">나이 : {age}세</div>
          <div className="id">주민번호 : {userDetail[0]?.patDob}</div>
          <div className="phone">전화번호 : {userDetail[0]?.phone}</div>
          <div className="memo">메모 : {userDetail[0]?.memo}</div>
        </S.Detail>
    </S.CustomerDetail> 
  )
}

export default Detail;
