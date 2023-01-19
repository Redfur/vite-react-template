import clsx from 'clsx'
import css from 'components/ui/Button/Button.module.css'
import ButtonGroup from 'components/ui/Button/ButtonGroup'
import { forwardRef } from 'react'

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset'
    content?: string | React.ReactNode
    variant?: 'default' | 'primary' | 'danger' | 'success'
    size?: 'small' | 'medium' | 'large'
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'content'>

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
    const { children, className, variant = 'default', type = 'button', size = 'medium', content, ...restProps } = props
    return (
        <button
            type={type}
            className={clsx(
                css.root,
                {
                    // colors
                    [css.root_default]: variant === 'default',
                    [css.root_primary]: variant === 'primary',
                    [css.root_success]: variant === 'success',
                    [css.root_danger]: variant === 'danger',
                },
                {
                    // sizes
                    [css.root_small]: size === 'small',
                    [css.root_medium]: size === 'medium',
                    [css.root_large]: size === 'large',
                },
                className
            )}
            ref={ref}
            {...restProps}
        >
            <span className={css.content}>{content ? content : children}</span>
        </button>
    )
}

export { ButtonGroup }

export default forwardRef(Button)
