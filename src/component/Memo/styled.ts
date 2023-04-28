import styled from "styled-components"

export const MemoArea = styled.div`
    width: 100%;
    height: 40%;
`

export const Memo = styled.div`
    width: 95%;
    height: 14em;
    margin: 10px 0 0 10px ;
    border: 1px solid black;
    overflow: scroll;
`
export const MemoList = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
    border: 1px solid black;
    div{
        margin: 0 10px;
    }
    input{
        width: 85%;
        height: 30px;
        border: 1px solid #d2d2d2;
    }
    button{
        background-color: #ffff;
        border: 0;
        font-size: 15px;
        margin-right:15px;
    }
`

export const EachMemo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const Edit = styled.div`
    width: 100%;
    display: flex;
    button{
        margin-left: 20px;
    }
`

export const MemoWrite = styled.div`
    margin: 0 10px;
    border: 1px solid black;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: 90%;
        height: 40px;
        border: 0;
    }
    button{
        height: 30px;
    }
`