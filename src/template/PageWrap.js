import React from 'react'
import css from './PageWrap.module.scss'

export default function PageWrap(props) {
    return (
        <div className={css.wrap}>
            <div className={css.title}>
                {props.title}
            </div>
            {props.children}
        </div>
    )
}
