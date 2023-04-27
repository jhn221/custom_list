import * as S from './styled';
import { ImArrowLeft, ImArrowRight, ImCross } from 'react-icons/im';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <S.HeaderContainer>
            <ImArrowLeft/>
            <ImArrowRight/>
            <ImCross/>
            <Link to='/'>
                <AiOutlineHome/>
            </Link>
            <input className='searchBar'>
            </input>
            <button></button>


        </S.HeaderContainer>
    )

}

export default Header;