import * as S from './styled';
import { ImArrowLeft, ImArrowRight, ImCross } from 'react-icons/im';
import { AiOutlineHome } from 'react-icons/ai';

const Header = () => {
    return (
        <S.HeaderContainer>
            <ImArrowLeft/>
            <ImArrowRight/>
            <ImCross/>
            <AiOutlineHome/>
            <input>
            </input>
            <button></button>


        </S.HeaderContainer>
    )

}

export default Header;