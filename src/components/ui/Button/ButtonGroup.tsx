import clsx from 'clsx'
import css from 'components/ui/Button/Button.module.css'
import React from 'react'

type ButtonGroupProps = {
    direction?: 'vertical' | 'horizontal'
    fluid?: boolean
}

const ButtonGroup: React.FC<React.PropsWithChildren<ButtonGroupProps>> = ({
    children,
    direction = 'horizontal',
    fluid,
}) => {
    return (
        <div
            className={clsx(css.group, {
                [css.group_fluid]: fluid,
                [css.group_vertical]: direction === 'vertical',
                [css.group_horizontal]: direction === 'horizontal',
            })}
        >
            {children}
        </div>
    )
}

export default ButtonGroup
