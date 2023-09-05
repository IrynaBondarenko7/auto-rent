import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Container';
import { AppBar } from './AppBar/AppBar';

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
