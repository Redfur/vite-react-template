import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    css: {
        modules: {
            generateScopedName(name, filename, _css) {
                // TODO: добавить hash
                const base = filename
                    .split('\\')
                    .pop()
                    .split('/')
                    .pop()
                    .replace(/\.module.css$/, '')
                if (name.startsWith('root')) {
                    const hasRootModifier = name[4] === '_'
                    if (hasRootModifier) {
                        return `${base}${name.replace('root', '')}`
                    }
                    return `${base}`
                }
                return `${base}__${name}`
            },
        },
    },
})
