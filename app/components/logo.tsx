import type { ComponentPropsWithoutRef } from 'react'

type LogoProps = {
  width?: number
  height?: number
} & ComponentPropsWithoutRef<'svg'>

export const Logo = ({ width = 50, height = 50, ...props }: LogoProps) => (
  <img src='https://cdn-icons-png.flaticon.com/512/9000/9000024.png' alt='' width='10%' />
)
