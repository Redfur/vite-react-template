import clsx from 'clsx'
import css from 'components/ui/Button/Button.module.css'
import ButtonGroup from 'components/ui/Button/ButtonGroup'
import { forwardRef } from 'react'

interface IButton {
    type?: 'button' | 'submit' | 'reset'
    content?: string | React.ReactNode
    variant?: 'default' | 'primary' | 'danger' | 'success'
}

const Button: React.FC<React.PropsWithRef<React.HTMLProps<HTMLButtonElement> & IButton>> = (props, ref) => {
    const { children, className, variant = 'default', type = 'button', content, ...restProps } = props
    return (
        <button
            type={type}
            className={clsx(
                css.root,
                {
                    [css.root_default]: variant === 'default',
                    [css.root_primary]: variant === 'primary',
                    [css.root_success]: variant === 'success',
                    [css.root_danger]: variant === 'danger',
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
