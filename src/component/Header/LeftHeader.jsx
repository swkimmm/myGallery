import Logo from '../Img/Logo.png';

function LeftHeader() {

    return (
        <div className='header-left-div'>
            <img src = {Logo}></img>
            <h2 onClick = {() => {window.location.href = '/';}}>My Gallery</h2>
        </div>
    )

}

export default LeftHeader;