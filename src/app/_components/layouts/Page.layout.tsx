import type { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

const Page = ({
  children,
  className = '',
  ...props
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={twMerge(
        'px-[25px] md:px-[35px] lg:px-[45px] flex flex-col bg-white shadow-page-shadow w-[min(1200px,100%)] mx-auto rounded-bl-[1rem] rounded-br-[1rem] min-h-[90vh] overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Page

export const PageBreakOutPadding = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <div className={twMerge('mx-[-25px] md:mx-[-35px] lg:mx-[-45px]', className)}>{children}</div>
