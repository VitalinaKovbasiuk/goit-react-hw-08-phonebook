import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import React from 'react';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
