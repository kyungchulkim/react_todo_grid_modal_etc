import React from 'react'
import css from './Modal.module.scss'
import Button from '../Button'
export default function Modal({ isVisible, onClose=()=> {}, header = 'Modal Header', body = 'Modal Body' }) {
    return (
        isVisible &&
        <div className={css.modal}>
            <div className={css.mask}>
                <div className={css.wrapper}>
                    <div className={css.container}>
                        <h3>{header}</h3>
                        <p>{body}</p>
                        <Button data="OK" onClick={() => onClose()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
