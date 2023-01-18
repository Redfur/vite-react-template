import clsx from 'clsx'
import css from 'components/ui/Button/Button.module.css'
import { forwardRef } from 'react'

interface IButton {
    type?: 'button' | 'submit' | 'reset'
    content?: string | React.ReactNode
}

const Button: React.FC<React.PropsWithRef<React.HTMLProps<HTMLButtonElement> & IButton>> = (props, ref) => {
    const { children, className, type = 'button', content, ...restProps } = props
    return (
        <button type={type} className={clsx(css.root, className)} ref={ref} {...restProps}>
            <span className={css.content}>{content ? content : children}</span>
        </button>
    )
}

export default forwardRef(Button)
