import * as S from './styled';

import axios from "axios";
import { useEffect } from "react";
import AdList from '../../component/AdList/AdList';

const Main = () => {

    useEffect(()=> {
        axios
        .get(`http://34.22.82.239:8080/getUserList?data=patdob`)
        // .get(`http://34.22.82.239:8080/getAdList`)
        .then((res) => {
          console.log(res.data.ads)

        })
        .catch((error) => {
          console.log(error);
        });
      },[])

    return(
        <S.Main>
            <S.advertisementMemo>
                <S.advertisement>
                    <div>광고</div>
                        <AdList/>
                </S.advertisement>
                <S.Memo>
                    <div>메모란</div>
                </S.Memo>
            </S.advertisementMemo>
            <S.customer>
            <div>손님 4명</div>
            </S.customer>
            <S.Search>
                <div>손님 검색 필터</div>
            </S.Search>

        </S.Main>
    )
}

export default Main;