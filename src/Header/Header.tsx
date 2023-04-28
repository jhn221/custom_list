import * as S from './styled';
import { ImArrowLeft, ImArrowRight, ImCross } from 'react-icons/im';
import { AiTwotoneHome } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    //뒤로가기 버튼
    const backBtn = () =>  {
        navigate(-1)
    }
    //앞으로가기 버튼
    const frontBtn = () =>  {
        navigate(-1)
    }

    return (
        <S.HeaderContainer>
            <ImArrowLeft onClick={backBtn} style={{"color":"white","marginLeft":"10px"}}/>
            <ImArrowRight onClick={frontBtn} style={{"color":"white"}}/>
            <ImCross/>
            <Link to='/'>
                <AiTwotoneHome style={{"color":"white"}}/>
            </Link>
            <input className='searchBar'/>
            <button>🔍</button>
        </S.HeaderContainer>
    )

}

export default Header;