import React from 'react';
import { makeClassNames } from '../utils'


export const Cover = ({ src, alt, rounded, circle, className = '' }) => {
  const baseClassName = 'cover'
  const classNames = makeClassNames(baseClassName, {
    [`${baseClassName}_rounded`]: rounded,
    [`${baseClassName}_circle`]: circle
  }, className)
  return (
    <figure className={classNames}>
      <img className='cover__image' src={src} alt={alt} />
    </figure>
  )
}
