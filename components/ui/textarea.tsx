import * as React from 'react'
import { clsx } from 'clsx'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        'w-full min-h-[120px] p-3 rounded-2xl border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'
