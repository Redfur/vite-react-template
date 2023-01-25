import MdiIcon from '@mdi/react'
import { IconProps as MdiIconProps } from '@mdi/react/dist/IconProps'
import clsx from 'clsx'
import css from './Icon.module.css'

type IconProps = MdiIconProps

const Icon: React.FC<IconProps> = (props) => {
    const { path, className, ...rest } = props
    return (
        <span className={clsx(css.root)}>
            <MdiIcon path={path} className={clsx(css.svg, className)} {...rest} />
        </span>
    )
}

export default Icon
