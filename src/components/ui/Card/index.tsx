import { mdiChevronDown, mdiLink } from '@mdi/js'
import clsx from 'clsx'
import { ThemeContext } from 'contexts/themeContext'
import { AnimatePresence, motion } from 'framer-motion'
import React, { forwardRef, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import css from './Card.module.css'

type CardLinkProps = {
    href: string
    external?: boolean
    text: string
}

type CardProps = {
    title: string
    defaultOpen?: boolean
    className?: string
    description?: string
    image?: string
    link?: CardLinkProps
}

type CardImageProps = {
    src: string
    alt?: string
}

export const CardImage: React.FC<CardImageProps & React.HTMLProps<HTMLImageElement>> = (props) => {
    const { src, alt } = props
    return (
        <div className={css.image}>
            <img src={src} alt={alt} />
        </div>
    )
}

export const CardDescription: React.FC<{ text: string }> = ({ text }) => {
    return <div className={css.description}>{text}</div>
}

export const CardLink: React.FC<CardLinkProps> = ({ external, href, text }) => {
    return external ? (
        <a target="_blank" href={href} rel="noreferrer" className={css.link}>
            <Icon path={mdiLink} className={css.linkIcon} />
            {text}
        </a>
    ) : (
        <Link to={href} className={css.link}>
            <Icon path={mdiLink} className={css.linkIcon} />
            {text}
        </Link>
    )
}

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (props, ref) => {
    const { defaultOpen, title, className, image, description, link } = props
    const { theme } = useContext(ThemeContext)
    const [open, setOpen] = useState(defaultOpen)
    return (
        <div
            ref={ref}
            className={clsx(
                css.root,
                {
                    [css.root_dark]: theme === 'dark',
                    [css.root_open]: open,
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
                        <div className={css.content}>
                            {image ? <CardImage src={image} /> : null}
                            {description ? <CardDescription text={description} /> : null}
                            {link ? <CardLink href={link.href} text={link.text} external={link.external} /> : null}
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}

export default forwardRef(Card)
