import React from 'react'
import css from './GridTable.module.scss'
import cn from 'classnames'
import useStores from '../useStores'

export default function GridTable({ data,sortData,keys }) {
    const { grid } = useStores()
    
    return (
        <table className={css.wrap}>
            <thead>
                <tr>
                    {keys.map((key, index) => {
                        return <th className={cn({[css.active] : grid.activeTable === key})} key={index} onClick={()=> sortData(key)}>{key}
                            <span className={cn(css.arrow,{[css.asc] : grid.keysArrow[key] === '' || grid.keysArrow[key] === '' -1},{[css.dsc] : grid.keysArrow[key] === 1})}></span>
                        </th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((d, index) => {
                    return (
                        <tr key={index}>
                            <td className={cn({[css.active] : grid.activeTable === 'name'})}>
                                {d.name}
                            </td>
                            <td className={cn({[css.active] : grid.activeTable === 'age'})}>
                                {d.age}
                            </td>
                            <td className={cn({[css.active] : grid.activeTable === 'height'})}>
                                {d.height}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
