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
    height: 100%;
`

export const advertisement = styled.div`
    width: 100%;
`

export const Memo = styled.div`
    margin: 30px 0 0 10px ;
`

export const customer = styled.div`
    border: 1px solid black;
    width: 45%;
`

export const dateFilter = styled.div`
    display: flex;
    margin: 0 15px;
    display: flex;
    /* align-items: baseline */
    h5{
        width: 50%;
    }
    /* .input-datepicker{
        margin: 20px;
    } */
    .react-datepicker-wrapper {
        display: inline-block;
        padding: 0;
        border: 0;
        width: 100%;
        height: 23px;
    }
    .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
        border: 0px solid transparent;
    }
`

export const CustomerList = styled.div`
    width: 92%;
    height: 10%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 20px;
    font-size: 20px;
    span{
        display: flex;
        margin: 20px;
    }
    div{
        margin-left: 20px;
    }
`

export const Search = styled.div`
    border: 1px solid black;
    width: 20%;
    h5{
        margin-left: 15px;
    }
    div{
        margin: 20px;
    }
`
