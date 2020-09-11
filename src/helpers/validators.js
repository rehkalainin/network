import React from 'react'

export const required = (value) => (value ? undefined : 'Required')

export const maxLenght = (max) => (value) =>
  value && value.length > max ? `Must be less ${max} characters` : undefined

export const maxLenght10 = maxLenght(10)
export const maxLenght30 = maxLenght(30)
