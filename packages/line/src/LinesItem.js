import { memo, useMemo } from 'react'
import { animated } from '@react-spring/web'

const LinesItem = ({ lineGenerator, points, color, thickness }) => {
    const path = useMemo(() => lineGenerator(points), [lineGenerator, points])

    return <animated.path d={path} fill="none" strokeWidth={thickness} stroke={color} />
}

export default memo(LinesItem)
