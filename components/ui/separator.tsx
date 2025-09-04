import * as React from 'react'
import { clsx } from 'clsx'

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('h-px w-full bg-gray-200', className)} {...props} />
}
