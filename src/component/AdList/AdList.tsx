import axios from "axios";
import { useEffect, useState } from "react";

interface list {
    adid:Number,
    imageLink: string,
    title: string
}
const AdList  = () => {

    const [adList, setAdList] = useState<list>()


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
      console.log(adList)

      return(
          <div>
          </div>
      )
}

export default AdList;