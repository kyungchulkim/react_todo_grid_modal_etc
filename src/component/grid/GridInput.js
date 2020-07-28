import React from 'react'
import useStores from '../useStores'

export default function GridInput() {
    const { grid } = useStores()
    
    return (
        <div style={{textAlign:"left",marginBottom:20}}>
            <input type="text" placeholder='Please enter keywords' onChange={(e)=> grid.searchData(e.target.value)}/>
        </div>
    )
}
