import Check from '../Img/Check.png';
import Menu from '../Img/Menu.png';
import User from '../Img/User.png';

function RightHeader() {

    return (
        <div className="header-right-div">
            <div>
                <div>
                    <img src = {Menu}></img>
                </div>
                <div>
                    <img src = {Check}></img>
                </div>
                <div>
                    <img src = {User}></img>
                </div>
            </div>
        </div>
    )
}

export default RightHeader;