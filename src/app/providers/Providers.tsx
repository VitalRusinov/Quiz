import { FC } from 'react'
//import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import {store} from 'app/store'
//import { ThemeProvider } from 'entities/theme'



interface IProviders {
    /** Content that will be wrapped by providers. */
    readonly children: JSX.Element
}

export const Providers: FC<IProviders> = ({ children }) => {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
}

/*        <ErrorBoundary FallbackComponent={Fallback}>
                    <ThemeProvider>
                    </ThemeProvider>

        </ErrorBoundary>
        */