import React from 'react'
import LogoInHeader from './LogoInHeader';
import MenuButton from './MenuButton';


export default function HeaderSection(){
    const element =(
        <div className='header-section'>
            <LogoInHeader/>
            <MenuButton/>
        </div>
    );

    return element;
}

