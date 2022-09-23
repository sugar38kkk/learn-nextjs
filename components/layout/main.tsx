import { LayoutProps } from '@/models/index';
import * as React from 'react';
import Auth from '../common/auth';
import Header from '../common/Header';



export default function MainLayout({ children }: LayoutProps) {
  return (
    <Auth>
      <Header />
      {children}
    </Auth>
  );
}
