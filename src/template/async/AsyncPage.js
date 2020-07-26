import React from 'react'
import css from './AsyncPage.module.scss'
import useStores from '../../component/useStores'
import Button from '../../component/Button'
import CityData from '../../component/async/CityData'
import { useObserver } from 'mobx-react'
import PageWrap from '../PageWrap'

export default function AsyncPage() {
    const { async } = useStores()

    return useObserver(() => (
        <PageWrap title={'Async Actions'}>
            <div>
                {
                    async.city.map(city => {
                        return (
                            <Button data={city} onClick={() => async.getCityData(city)} />
                        )
                    })
                }
            </div>
            <div>
                {async.cityData !== undefined ?
                    <CityData data={async.cityData} /> : <div className={css.isLoading}>...isLoading</div>
                }
            </div>
        </PageWrap>
    ))
}
