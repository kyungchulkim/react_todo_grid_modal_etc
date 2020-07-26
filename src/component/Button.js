import React from 'react'
import css from './Button.module.scss'

export default function Button({data,onClick}) {
    return (
        <button className={css.wrap} onClick={()=> onClick()}>
            {data}
        </button>
    )
}