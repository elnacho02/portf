import type { ComponentPropsWithoutRef } from 'react'

type SectionShellProps = ComponentPropsWithoutRef<'section'>

export const SectionShell = ({ children, ...props }: SectionShellProps) => (
  <section className='container pb-40 md:pb-10' {...props}>
    {children}
  </section>
)
