import React from 'react'
import {useDimension, useAnimatedScale} from './hooks'
import BiSquareUpDownMoverPresentational from './BiSquareUpDownMoverPresentational'

const BiSquareUpDownMoverContainer = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02 /4, 20)
    return <BiSquareUpDownMoverPresentational w = {w} h = {w} scale = {scale} onClick = {start}>
        </BiSquareUpDownMoverPresentational>
}

export default BiSquareUpDownMoverContainer
