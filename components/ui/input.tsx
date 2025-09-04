import * as React from 'react'
import { clsx } from 'clsx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'w-full h-10 px-3 rounded-2xl border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'
