import * as S from './styled';
import axios from "axios";
import { useEffect, useState } from "react";
import AdList from '../../component/AdList/AdList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Memo from '../../component/Memo/memo';
import {FaCalendarAlt} from 'react-icons/fa';

interface list {
    userid:string,
    RevDate: string,
    [name:string]: string,
    phone: string,
    patDob: string,
    memo:string
}

const Main = () => {

    const [selectedDate, setselectedDate] = useState<string>('');
    const [customer, setCustomer] = useState<list[]>([]);
    const [change, selectChange] = useState<string>('name');
    const [infoValue, setInfoValue] = useState<string>("")


    const changeDate = (date:any) => {
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        var yyyyMMdd = year + month  + day;
        setselectedDate(yyyyMMdd)
    }
    localStorage.setItem("Date",selectedDate)

    useEffect(()=> {
        axios
        .get(`http://34.22.82.239:8080/getUserList?date=${selectedDate}`)
        .then((res) => {
            setCustomer(res.data.users)
        })
        .catch((error) => {
            console.log(error);
        });
    },[selectedDate])

        const changeInfoValue = (e:any) => {
            setInfoValue(e.target.value)
        }

        let filterList = customer.filter((customer) => customer[change] === infoValue)
        let filterListId1 = filterList[0]?.userid
        let filterListId2 = filterList[1]?.userid

        const seleteOption = (e:any) => {
            selectChange(e.target.value)
        }
        const nowDate = new Date();


    return(
        <S.Main>
            <S.advertisementMemo>
                <S.advertisement>
                    <div className='title'>광고</div>
                        <AdList/>
                </S.advertisement>
                <div className='title'>메모란</div>
                <Memo/>
            </S.advertisementMemo>
            <S.customer>
                <S.dateFilter>
                    <h4>손님 {customer.length === undefined ? 0 : customer.length}명</h4>
                    <label> 
                    <DatePicker
                        dateFormat="yyyyMMdd" // 날짜 형식 설정
                        className="input-datepicker" // 클래스 명 지정 css주기 위해
                        closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                        value={selectedDate ? `${selectedDate.slice(0,4)}/${selectedDate.slice(4,6)}/${selectedDate.slice(6,8)}`: "날짜를 선택해주세요" } // 날짜를 선택하였을 때 실행될 함수
                        onChange={(date: Date) => changeDate(date)}
                        />
                    <FaCalendarAlt style={{"cursor": "pointer"}}/>
                    </label>
                </S.dateFilter>
              {customer.length !== undefined ? customer.map((customer) => (
                  <S.CustomerList 
                    className={customer.userid === filterListId1 || customer.userid === filterListId2 ? "filtered" : "unfilterd"} 
                    key={customer.userid}>
                      <Link to={`/detail/${customer.userid}`}>
                      <span>
                        <div>{customer.name}</div> | 
                        <div>
                            {Number(customer.patDob.slice(7)) %2 === 0 ? "여" : "남"}/
                            {
                                Number(customer.patDob.substring(0,2)) > 23 ? 
                                nowDate.getFullYear() - (Number(customer.patDob.substring(0,2)) + 1900) :
                                nowDate.getFullYear() - (Number(customer.patDob.substring(0,2)) + 2000) }
                            </div> |
                        <div>{customer.patDob}</div> |  
                        <div>{customer.phone}</div>
                      </span>
                      <div>{customer.memo}</div> 
                    </Link>
                  </S.CustomerList>
              )):null}
            </S.customer>
            <S.Search>
                <h4>손님 검색 필터</h4>
                <div>
                <select onChange={seleteOption}>
                    <option value="name">이름</option>
                    <option value="phone">전화번호</option>
                    <option value="patDob">생년월일</option>
                </select>
                <input 
                    onChange={changeInfoValue}
                    placeholder="  🔍 장티엔">
                </input>
                </div>
                {filterList.length !== undefined ? filterList.map((filterList) => (
                  <S.SearchCustomerList key={filterList.userid}>
                      <Link to={`/detail/${filterList.userid}`}>
                      <span>
                        <div>{filterList.name}</div> |
                        <div>
                        {Number(filterList.patDob.slice(7)) %2 === 0 ? "여" : "남"}
                            /{
                                Number(filterList.patDob.substring(0,2)) > 23 ? 
                                nowDate.getFullYear() - (Number(filterList.patDob.substring(0,2)) + 1900) :
                                nowDate.getFullYear() - (Number(filterList.patDob.substring(0,2)) + 2000) }
                            </div> | 
                        <div>{filterList.patDob}</div>
                      </span>
                        <div>{filterList.phone}</div>
                        <div>{filterList.memo}</div> 
                    </Link>
                  </S.SearchCustomerList>
              )):null}
            </S.Search>
        </S.Main>
    )
}

export default Main;