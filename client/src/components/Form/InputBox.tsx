'use client';

import React, { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputBoxProps = {
  label?: string;
  className?: string;
  id?: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  error?: string
};

const InputBox: FC<InputBoxProps> = ({
  label,
  className,
  id,
  type,
  name,
  placeholder,
  register,
  required,
  error
}) => {
  return (
    <div
      className={`flex flex-col min-w-[400px] mb-2 ${
        className ? className : ''
      }`}
    >
      {label && (
        <label htmlFor={id} className='text-lg text-gray-800'>
          {label}
        </label>
      )}
      <input
        type={type}
        className='w-full border border-gray-400 p-2 text-base rounded-md'
        id={id}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </div>
  );
};

export default InputBox;
