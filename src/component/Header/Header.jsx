import LH from './LeftHeader';
import CH from './CenterHeader';
import RH from './RightHeader';

import '../../CSS/Header.css';


function Header() {
    return (
        <div className='header'>
            <LH/>
            <CH/>
            <RH/>
        </div>
    )

}

export default Header;