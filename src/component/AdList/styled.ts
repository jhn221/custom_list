import styled from "styled-components";


export const Listcontainer = styled.div`
    width: 100%;
    margin-left:10%;
    .item{
        width: 80%;
        height: 100%;
    }
    .slick-prev:before,
    .slick-next:before
{
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: .5;
    color: red;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`

export const eachAd = styled.div`
    width: 100px;
    height: 500px;
    img{
        width: 400px;
        height: 400px;
        display: flex;
        justify-content: center;
    }
    div{
        text-align: center;
    }
`