import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <label className="checkbox style">
            <div className="checkbox__body">Короткометражки</div>
            <input type="checkbox"/>
            
            <div className="checkbox__checkmark"></div>
            {/* <div className="checkbox__body">Короткометражки</div> */}
        </label>
    )
}

export default FilterCheckbox;