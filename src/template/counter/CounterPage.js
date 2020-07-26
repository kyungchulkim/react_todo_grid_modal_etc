import React from 'react'
import useStores from '../../component/useStores'
import { useObserver } from 'mobx-react'
import PageWrap from '../PageWrap'
import Button from '../../component/Button'
import css from './CounterPage.module.scss'
export default function CounterPage() {
    const { counter } = useStores()

    return useObserver(() => (
        <PageWrap title={'Counter'}>
            <p className={css.wrap}>
                <Button data={'+'} onClick={()=> counter.setCounter('plus')}/>
                {counter.count}
                <Button data={'-'}  onClick={()=> counter.setCounter('minus')}/>
            </p>
            <div>
                {`Count title :${counter.status}`}
            </div>
        </PageWrap>
    ))
}
