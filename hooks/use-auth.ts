import useSWR from 'swr';
import type { SWRConfiguration } from 'swr';
import { authApi } from '@/api/index';
import { LoginPayload } from '@/models/index';

export function useAuth(options?: SWRConfiguration) {
  const URL_API_PROFILE: string = '/auth/profile';
  const HOUR = 60 * 60 * 1000;
  const { data,error, mutate } = useSWR(URL_API_PROFILE, {
    dedupingInterval: HOUR,
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = data === undefined && error === undefined;

  const login = async(payload: LoginPayload) => {
    await authApi.login(payload);
    await mutate();
  };
  const logout = async() => {
    await authApi.logout();
    mutate({}, false)
  };

  return {
    profile: data?.data || undefined,
    login,
    logout,
    firstLoading,
  };
}
