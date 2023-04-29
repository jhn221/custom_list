import axios from "axios";
import { useEffect, useState } from "react";
import * as S from'./styled'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface list {
    adid: Number,
    imageLink: string,
    title: string,
}
const AdList  = () => {

  const [adList, setAdList] = useState<list[]>([])

  //광고 api 호출
  useEffect(()=> {
    axios
    .get(`http://34.22.82.239:8080/getAdList`)
    .then((res) => {
      setAdList(res.data.ads)
    })
    .catch((error) => {
      console.log(error);
    });
  },[])

  //slider setting
  const settings = {
    dots: false,
    infinite: true,
    speed: 50,
    autoplay: true,
    pauseOnHover: true,
  };

  return(
    <S.Listcontainer>
      <Slider
        className="item"
        slidesToShow={1}
        slidesToScroll={1}
        {...settings}
      >
        {adList && adList.map((list) => (
          <S.eachAd key={`${list.adid}`}>
            <img
              src={list.imageLink}
              alt="상품 이미지"
              className='itempicture'
            ></img>
            <div>{list.title}</div>
          </S.eachAd>
        ))}
      </Slider>
    </S.Listcontainer>
  )
}

export default AdList;