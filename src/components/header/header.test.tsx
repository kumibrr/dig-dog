import { lazy, Suspense } from 'react';
import { render, screen } from '@testing-library/react';

const Header = lazy(() => import('./header'))

test('Header is rendered', async () => {
  render(
      <Suspense fallback={<p>l</p>}>
        <Header></Header>
      </Suspense>
  );
  const pageTitle = await screen.findByText(/dig-dog/);
  const select = await screen.findByRole('list');
  expect(pageTitle).toBeInTheDocument();
  expect(select).toBeInTheDocument();
  expect(select.childElementCount).toBeGreaterThan(0);
});
