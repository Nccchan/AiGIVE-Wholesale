'use client'
import * as React from 'react'
import { clsx } from 'clsx'

export function Accordion({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={clsx('space-y-3', className)}>{children}</div>
}

export function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="card p-0">
      <button
        onClick={() => setOpen((v)=>!v)}
        className="w-full text-left p-4 font-medium flex items-center justify-between"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span aria-hidden className="ml-4">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-700">{children}</div>}
    </div>
  )
}
