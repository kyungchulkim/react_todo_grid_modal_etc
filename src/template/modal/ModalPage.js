import React, { useState } from 'react'
import PageWrap from '../PageWrap'
import Button from '../../component/Button'
import Modal from '../../component/modal/Modal'

export default function ModalPage() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <PageWrap title={'Modal'}>
            <Button data='Show Modal' onClick={()=> setIsVisible(!isVisible)}/>
            <Modal isVisible={isVisible} onClose={()=> setIsVisible(false)} header={'헤더 테스트'}/>
        </PageWrap>
    )
}
