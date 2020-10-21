import React from 'react';
import { bars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'





export default function MenuButton(){
    const element= (<div menu-button-container>
        <FontAwesomeIcon icon={bars}/>
    </div>
    );
return element;

}