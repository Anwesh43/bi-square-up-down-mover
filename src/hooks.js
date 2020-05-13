import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const size = Math.min(w, h) / 6
    console.log(h)
    return {
        getBlockStyle(i) {
            const sf1 = divideScale(sf, 0, 2)
            const sf2 = divideScale(sf, 1, 2)
            const sf1i = divideScale(sf1, i, 2)
            const sf2i = divideScale(sf2, i, 2)
            const si = 1 - 2 * i
            const x = (w - size) * i + (w / 2 - size) * sf1i * si
            const y = h / 2  - size / 2 + (h / 2 - size / 2) * sf2i * si
            const left = `${x}px`
            const top = `${y}px`
            const width = `${size}px`
            const height = `${size}px`
            const position = 'absolute'
            const background = '#3F51B5'
            return {
                left,
                top,
                position,
                width,
                height,
                background
            }
        }
    }
}
