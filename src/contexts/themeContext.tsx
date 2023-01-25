import Button from 'components/ui/Button'
import React, { createContext, useContext, useEffect, useMemo } from 'react'
import useLocalStorageState from 'utils/useLocalStorageState'

type themeContext = {
    theme: 'dark' | 'light'
    changeTheme: (nextTheme: 'dark' | 'light') => void
}

export const themes: Record<string, 'dark' | 'light'> = {
    dark: 'dark',
    light: 'light',
}

export const ThemeContext = createContext<themeContext>({
    theme: themes.dark,
    changeTheme: () => null,
})

export const ThemeToggleButton = () => {
    const { theme, changeTheme } = useContext(ThemeContext)
    return <Button content={theme} onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')} />
}

export const ThemeContextPovider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const isBrowserDefaultDark = useMemo(() => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }, [])
    const [theme, setTheme] = useLocalStorageState('theme', {
        defaultValue: isBrowserDefaultDark ? themes.dark : themes.light,
    })
    useEffect(() => {
        switch (theme) {
            case themes.dark:
                document.body.classList.add(themes.dark)
                break
            case themes.light:
            default:
                document.body.classList.remove(themes.dark)
        }
    }, [theme])
    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme: setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
