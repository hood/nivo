import { memo } from 'react'
import AnimatedLinesItem from './AnimatedLinesItem'
import LinesItem from './LinesItem'

const Lines = ({ lines, lineGenerator, lineWidth, animated }) => {
    const items = lines.slice(0).toReversed()

    if (animated)
        return items.map(({ id, data, color }) => (
            <AnimatedLinesItem
                key={id}
                id={id}
                points={data.map(d => d.position)}
                lineGenerator={lineGenerator}
                color={color}
                thickness={lineWidth}
                animated={animated}
            />
        ))

    return items.map(({ id, data, color }) => (
        <LinesItem
            key={id}
            id={id}
            points={data.map(d => d.position)}
            lineGenerator={lineGenerator}
            color={color}
            thickness={lineWidth}
            animated={animated}
        />
    ))
}

export default memo(Lines)
