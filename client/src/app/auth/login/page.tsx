'use client';

import SubmitButton from '@/components/Button/SubmitButton';
import InputBox from '@/components/Form/InputBox';
import AuthPageLayout from '@/components/Layout/AuthPageLayout';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <AuthPageLayout>
      <div className='text-center'>
        <h2 className='text-2xl'>Welcome Back !</h2>
        <p className='text-gray-500'>Start chatting with your friends</p>
      </div>
      <div className='flex flex-col gap-3 mt-4'>
        <button className='flex items-center gap-2 border border-gray-300 shadow-sm justify-center p-2 rounded-md w-full'>
          <FcGoogle size='20' />
          <span>Signin with Google</span>
        </button>
        <button className='flex items-center gap-2 border border-gray-300 shadow-sm justify-center p-2 rounded-md w-full'>
          <BsGithub size='20' />
          <span>Signin with Github</span>
        </button>
      </div>
      <form className='w-full mt-3' onSubmit={handleSubmit(submitLogin)}>
        <InputBox
          type='email'
          label='Email'
          name='email'
          id='email'
          placeholder='hello@example.com'
          register={register}
          required="Email is required"
          error={errors.email?.message as string}
        />
        <InputBox
          type='password'
          label='Password'
          name='password'
          id='password'
          placeholder='Password'
          register={register}
          required="Password is required"
          error={errors.password?.message as string}
        />
        <div className='text-sm text-blue-600 text-right'>
          <Link href={'/'}>Forgot Password?</Link>
        </div>
        <SubmitButton className='mt-3'>Login Now</SubmitButton>
      </form>
      <div className='mt-4 flex gap-2'>
        <span className='text-gray-400'>Already have an account?</span>
        <Link href='./signup' className='hover:underline'>
          Signup Here
        </Link>
      </div>
    </AuthPageLayout>
  );
};

export default Login;
