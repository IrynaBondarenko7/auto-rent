import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Container';

export default function Layout() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
