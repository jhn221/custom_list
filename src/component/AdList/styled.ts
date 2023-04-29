import styled from "styled-components";


export const Listcontainer = styled.div`
    width: 100%;
    margin-left:30px;
    .item{
        width: 90%;
    }
    .slick-prev{
        left: 25px;
        z-index: 2;
    }

    .slick-next{
        left: 550px;
    }
`

export const eachAd = styled.div`
    img{
        height: 400px;
        display: flex;
        justify-content: center;
    }
    div{
        margin-top: 20px;
        text-align: center;
    }
`