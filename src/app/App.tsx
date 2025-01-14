import { Providers } from './providers'
import { AppRouter } from './routers'
import './styles/global.scss'

export function App() {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    )
}