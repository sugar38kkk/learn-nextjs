import * as React from 'react';
import { LoginPayload } from '../models';
import { useAuth } from '@/hooks/index';
import { useRouter } from 'next/router';


export interface LoginPageProps {
}

const initialState: LoginPayload = {
  email: 'hnquang@gmail.com',
  password: '123456',
};

export default function LoginPage (props: LoginPageProps) {

  const router = useRouter()

  const {profile,login} = useAuth({
    revalidateOnMount: false
  })

  const [payload, setPayload] = React.useState(()=>initialState)

  const hanleLoginClick = async()=>{
    try {
      await login(payload)
      router.push('/')
    } catch (error) {
      console.log('failed to login',error)
    }
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder
            roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              value={payload.email}
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              value={payload.password}
              type="password"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={hanleLoginClick}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
          <p className="text-xs text-gray-500 mt-3">
            {"Literally you probably haven't heard of them jean shorts."}
          </p>
        </div>
      </div>
    </section>
  );
}
