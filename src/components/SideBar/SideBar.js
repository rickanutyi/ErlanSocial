import React from 'react';
import './styles/SideBar.css'
import Fire from '../../images/icons/fire.png'
import Fresh from '../../images/icons/fresh.png'

const SideBar = () => {
    return (
        <div className='side_bar-left'>
            <ul className='side_bar-top'>
                <li><img width='20px' src={Fire} alt="" /> Популярное</li>
                <li><img width='20px' src={Fresh} alt="" /> Свежее</li>
                <li>Подписки</li>
                <li>певьфт</li>
                <li>влпщувла</li>
            </ul>
        </div>
    );
};

export default SideBar;