import {useState} from 'react';
import Search from '../Img/SearchList.png';

function CenterHeader() {
    const [keyWord , setKeyWord] = useState({ word : '' , flag : false});


    const SearchHandler = () => {
        console.log("검색 값 : " + keyWord.word);
        setKeyWord({...keyWord , flag : true});

    };

    const onInputHandler = (event) => {
        console.log("입력 값 : " + event.target.value);
        setKeyWord({word : event.target.value, flag : false});
    }

    return (
        <div className="header-center-div">
            <div>
                <img src = {Search} onClick = {SearchHandler}></img>
                <input type="text" value = {keyWord.word} onChange={onInputHandler}/>
            </div>
        </div>
    )
}

export default CenterHeader;