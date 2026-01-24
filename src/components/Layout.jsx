import React from 'react';
import { Outlet } from 'react-router-dom';
import ChatWidget from './ChatWidget'; // Import Widget tadi

// Component ini akan membungkus semua halaman
export default function Layout() {
  return (
    <>
      <Outlet />
      <ChatWidget />
    </>
  );
}