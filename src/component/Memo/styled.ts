import styled from "styled-components"

export const MemoArea = styled.div`
    width: 100%;
    height: 40%;
`

export const Memo = styled.div`
    width: 95%;
    height: 90%;
    margin: 10px 0 0 10px ;
    border: 1px solid black;
    overflow: scroll;
    div{
        margin-bottom: 10px;
    }
`
export const MemoList = styled.div`
    width: 90%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    margin: 25px;
    border: 1px solid black;
    input{
        width: 100%;
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