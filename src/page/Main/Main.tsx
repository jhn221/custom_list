import * as S from './styled';

import axios from "axios";
import { useEffect, useState } from "react";
import AdList from '../../component/AdList/AdList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setSourceMapRange } from 'typescript';

interface memolist {
    id:Number
    value:string,
}

interface list {
    userid:Number,
    RevDate: string,
    name: string,
    phone: string,
    patDob: string,
    memo:string
}

const Main = () => {

    const [memo, setMemo] = useState<memolist[]>([{id:0, value:''}])
    const [selectedDate, setselectedDateDate] = useState<string>();
    const [customer, setCustomer] = useState<list[]>([]);

    console.log(selectedDate)
    // console.log(date)

    const changeDate = (date:any) => {
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        var yyyyMMdd = year + month  + day;
        setselectedDateDate(yyyyMMdd)
    }

    useEffect(()=> {
        axios
        .get(`http://34.22.82.239:8080/getUserList?date=${selectedDate}`)
        .then((res) => {
            console.log(res.data.users)
            setCustomer(res.data.users)
        })
        .catch((error) => {
          console.log(error);
        });
      },[selectedDate])

      console.log(customer)

      const memoChange = (e:any) => {
        // setMemo(...memo,id:id+1,value: e.target.value)
        console.log(memo)
      }
        const handleLogin = (e:any) => {
            setMemo(e.target.value)      
        }

        // console.log(memo)
      const enterKeyPress = (e:any) => {
        if (e.key === "Enter") {
          handleLogin(e);
        }

    }

    return(
        <S.Main>
            <S.advertisementMemo>
                <S.advertisement>
                    <div>광고</div>
                        <AdList/>
                </S.advertisement>
                <S.Memo>
                    <div>메모란</div>
                    <div>
                        {/* <div>{memo.value}</div> */}
                        <input
                        placeholder='메모 입력란'
                        onChange={memoChange}
                        onKeyPress={enterKeyPress}
                        ></input>
                        <button onClick={() => handleLogin}>작성</button>
                    </div>
                </S.Memo>
            </S.advertisementMemo>
            <S.customer>
            <div>손님 {customer.length === undefined ? 0 : customer.length}명</div>
            <DatePicker
                dateFormat="yyyyMMdd" // 날짜 형식 설정
                className="input-datepicker" // 클래스 명 지정 css주기 위해
                // minDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                // placeholderText="공동구매 시작일 선택" // placeholder
                // selected={selectedDate} // value  // 날짜를 선택하였을 때 실행될 함수
                onChange={(date: Date) => changeDate(date)}
              />
              {customer.length !== undefined ? customer.map((customer) => (
                  <S.CustomerList>
                      <span>
                        <div>{customer.name}</div> |
                        <div>{customer.patDob}</div> |
                        <div>{customer.phone}</div> |
                      </span>
                      <div>{customer.memo}</div> 
                  </S.CustomerList>
              )):null}
            </S.customer>
            <S.Search>
                <div>손님 검색 필터</div>
            </S.Search>

        </S.Main>
    )
}

export default Main;