import Search from '../Img/SearchList.png';

function CenterHeader() {
    return (
        <div className="header-center-div">
            <div>
                <img src = {Search}></img>
                <input type="text" />
            </div>
        </div>
    )
}

export default CenterHeader;