import BackButton from '@/components/BackButton'
import React from 'react'

export function DashboardInnerLayout({ children }: any) {
  return (
    <div className="flex flex-col  md:p-8 p-4 pt-6 w-full">{children}</div>
  )
}

export function DashboardLayoutHeading({ children }: any) {
  return (
    <section className=' flex flex-col gap-6'>
      <BackButton />
      <span className="text-2xl tracking-tighter select-none font-bold">
        {children}
      </span>
    </section>
  )
}
