import styled from "styled-components";


export const Listcontainer = styled.div`
    width: 100%;
    margin-left:60px;
    .item{
        width: 80%;
        height: 100%;
    }
    .slick-prev:before,
    .slick-next:before{
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;
        opacity: 0.9;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-prev{
        left: 15px;
        z-index: 2;
    }

    .slick-next{
        left: 500px;
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