import Logo from '../Img/Logo.png';

function LeftHeader() {

    return (
        <div className='header-left-div'>
            <img src = {Logo}></img>
            <h2>My Gallery</h2>
        </div>
    )

}

export default LeftHeader;