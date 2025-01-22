import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { ThemeProvider } from 'features/theme-switcher';

interface IProviders {
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
