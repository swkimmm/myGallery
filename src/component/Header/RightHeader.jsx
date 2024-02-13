import { useState } from 'react';
import blackAlarm from '../Img/alarm_black.png';
import whiteAlarm from '../Img/alarm_white.png';
import Menu from '../Img/Menu.png';
import User from '../Img/User.png';

function RightHeader() {

    // 로그인 정보 & 알림 정보를 받았다는 전제 하에 진행 추후 로직 변경 예정.



    const [info, setInfo] = useState(false);

    const menuClickHandler = () => {

    };

    const infoStatusHandler = () => {

    };

    const userInfoHandler = () => {

    };

    return (
        <div className="header-right-div">
            <div>
                <div>
                    <img src = {Menu}></img>
                </div>
                <div>
                    <img src = {info ? blackAlarm : whiteAlarm}></img>
                </div>
                <div>
                    <img src = {User}></img>
                </div>
            </div>
        </div>
    )
}

export default RightHeader;