import React from 'react';
import { BaseInput } from './_base'


export const Input = ({ className, ...props }) => {

  return <div className='input'>
    <input type="number" min={0} max={1000000000000} minLength={1} maxLength={13} />
    <BaseInput {...props} />
  </div>
}
