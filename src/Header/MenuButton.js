import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';





export default function MenuButton(){
    const element= (
    <div className='menu-button-container'>
        <FontAwesomeIcon className='menu-button' icon={faBars}/>
    </div>
    );
return element;

}