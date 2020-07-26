import React from 'react'
import css from './Header.module.scss'
import {
    Link
} from "react-router-dom";
export default function Header() {
    const nav = ['Todo', 'Grid', 'Modals', 'Counter', 'Async'];
    return (
        <div className={css.wrap}>
            {nav.map(n => {
                return (
                    <Link to={n === 'Todo' ? '/' : n.toLowerCase()} key={n}>
                        <div className={css.item} >{n}</div>
                    </Link>
                )
            })}
        </div>
    )
}
