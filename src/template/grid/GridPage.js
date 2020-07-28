import React, { useState } from 'react'
import PageWrap from '../PageWrap'
import GridTable from '../../component/grid/GridTable'
import css from './GridPage.module.scss'
import useStores from '../../component/useStores'
import { useObserver } from 'mobx-react'
import GridInput from '../../component/grid/GridInput'

export default function GridPage() {
    const { grid } = useStores()

    return useObserver(()=> (
        <PageWrap title={'Grid'}>
            <div className={css.gridWrap}>
                <GridInput />
                <GridTable data={grid.gridData} sortData={grid.sortData} keys={grid.keys}/>
            </div>
        </PageWrap>
    ))
}
