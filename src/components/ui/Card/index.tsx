import { mdiChevronDown } from '@mdi/js'
import clsx from 'clsx'
import { ThemeContext } from 'contexts/themeContext'
import { AnimatePresence, motion } from 'framer-motion'
import React, { forwardRef, useContext, useState } from 'react'
import Icon from '../Icon'
import css from './Card.module.css'

type CardProps = {
    title: string
    defaultOpen?: boolean
    className?: string
    children?: JSX.Element | string
}

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (props, ref) => {
    const { defaultOpen, title, className, children } = props
    const { theme } = useContext(ThemeContext)
    const [open, setOpen] = useState(defaultOpen)
    return (
        <div
            ref={ref}
            className={clsx(
                css.root,
                {
                    [css.root_dark]: theme === 'dark',
                },
                className
            )}
        >
            <div className={css.header}>
                <span className={css.title}>{title}</span>
                <button type="button" className={css.toggleButton} onClick={() => setOpen(!open)}>
                    <Icon path={mdiChevronDown} rotate={open ? 180 : 0} />
                </button>
            </div>
            <AnimatePresence>
                {open ? (
                    <motion.div
                        key="body"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: {
                                height: 'auto',
                            },
                            collapsed: {
                                height: 0,
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                        className={css.body}
                    >
                        <div className={css.content}>{children}</div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}

export default forwardRef(Card)
