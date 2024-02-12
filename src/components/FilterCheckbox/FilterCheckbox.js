import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox(props) {
    function changeCheckBox(checkbox) {
        props.setIsCheck(checkbox.target.checked)
        console.log('changeCheckBox', checkbox.target.checked)
        localStorage.setItem('shorts', checkbox.target.checked)
    }

    return (
        <label className="checkbox style">
            <div className="checkbox__body">Короткометражки</div>
            <input type="checkbox" checked={props.isCheck} onChange={changeCheckBox}/>
            
            <div className="checkbox__checkmark"></div>
            {/* <div className="checkbox__body">Короткометражки</div> */}
        </label>
    )
}

export default FilterCheckbox;

