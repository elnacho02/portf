import { ComponentPropsWithoutRef, FC } from 'react'

type SectionShellProps = ComponentPropsWithoutRef<'section'>

export const SectionShell: FC<SectionShellProps> = ({ children, ...props }) => (
	<section className='container pb-64' {...props}>
		{children}
	</section>
)