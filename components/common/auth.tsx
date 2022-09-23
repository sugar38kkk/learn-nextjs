import { useAuth } from '@/hooks/use-auth';
import { LayoutProps } from '@/models/common';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Loading from './loading';

interface Props {
  children: any;
}

const Auth = ({ children }: Props) => {
  const { profile,firstLoading } = useAuth();
  const router = useRouter()

  useEffect(() => {
    if(!firstLoading && !profile){
        router.push("/login")
    }
  }, [router, profile, firstLoading]);

  if (!profile) return <Loading/>

  return <div>{children}</div>;
};

export default Auth;
