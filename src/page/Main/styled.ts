import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`
export const advertisementMemo = styled.div`
    border: 1px solid black;
    width: 35%;
    .title{
        margin: 10px;
    }
`

export const advertisement = styled.div`
    width: 100%;
`

export const Memo = styled.div`
    width: 95%;
    height: 35%;
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

export const customer = styled.div`
    border: 1px solid black;
    width: 40%;
    overflow: scroll;
    .filtered{
        background-color: aliceblue;
    }
`

export const dateFilter = styled.div`
    display: flex;
    justify-items: flex-end;
    align-items: center;
    margin: 0 15px;
    label{
        width: 40%;
        display: flex;
        flex-direction: row;
        align-items: center;
        svg{
            margin: 10px;
        }
    }
    h4{
        width: 20%;
    }
    .input-datepicker{
        margin: 20px;
        height: 25px;
        
    }
    .react-datepicker {
        font-family: "Helvetica Neue", helvetica, arial, sans-serif;
        font-size: 0.8rem;
        background-color: #fff;
        color: #000;
        border: 1px solid #aeaeae;
        border-radius: 0.3rem;
        display: inline-block;
        position: relative;
        top: -30px;
        left: 20px;
    }
    .react-datepicker-wrapper {
        display: inline-block;
        width: 60%;
    }
    .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
        border: 0px solid transparent;
    }
`

export const CustomerList = styled.div`
    width: 92%;
    height: 10%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 20px;
    font-size: 20px;
    span{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px;
    }
    div{
        margin: 0 20px;
    }
    a{
        text-decoration-line:none;
        color: black;
    }
`

export const Search = styled.div`
    border: 1px solid black;
    width: 25%;
    h4{
        margin-left: 15px;
    }
    div{
        margin: 20px;
    }
    input{
        border-radius: 20px;
        height: 20px;
    }
    select{
        width: 50%;
        margin-right: 10px;
        height: 25px;
    }
        
    
`

export const SearchCustomerList=styled(CustomerList)`
    height: 13%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    span{
        display: flex;
        margin: 0px;
    }
    div{
        margin: 10px;
    }
`
