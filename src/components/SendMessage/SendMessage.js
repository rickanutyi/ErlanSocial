import React from 'react';
import './style/SendMessage.css'

const SendMessage = () => {
    return (
        <div className='letters'>
            <div className="letters_list">
                
            </div>
            <div className="letters_action">
                <input type="text" />
                <button>отправить</button>
            </div>
        </div>
    );
};

export default SendMessage;