import {useStyle} from './hooks'
import React from 'react'

const Block = ({i, w, h, scale}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    return (<div style = {getBlockStyle(i)}>
    </div>)
}

const BiSquareUpDownMoverPresentational = ({w, h, scale, onClick}) => {
    return (<div onClick = {onClick}>
        [0, 1].map(i => <Block i = {i} w = {w} h = {h} scale = {scale} key = {`block_${i}`}/>)
    </div>)
}

export default BiSquareUpDownMoverPresentational
