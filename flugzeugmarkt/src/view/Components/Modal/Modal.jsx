import React from "react";
import Button from "../Button/Button";
import './Modal.scss'

function Modal(props) {

    return (
        <div className={props.cssClass} onClick={()=>props.onClick()}>
            <div className='modal'>
                <div className='modal-header'>
                    <h2 className='header-text'>{props.header}</h2>
                    <div className='modal-cross' hidden={!props.closeButton} onClick={()=>props.onClick()}/>
                </div>
                <p className='modal-text'>{props.text}</p>
                <p className='modal-text'>{props.subtext}</p>
                <div className='modal-buttons-wrapper'>
                    {props.actions}
                </div>
            </div>
        </div>
    );
}

export default Modal;

