import { Providers } from './providers';
import { AppRouter } from './routers';
import './App.scss';

export function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
