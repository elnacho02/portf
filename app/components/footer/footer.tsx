import { motion } from 'framer-motion'

import { footerItemVariants, footerVariants } from '~/components/footer'

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between'
    >
      <section className='flex w-1/2 gap-8 md:gap-12 text-xl'>
        <motion.a
          href='https://www.behance.net/giulianapizzo1?tracking_source=search_users|giuliana%20pizzo'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Behance
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/giuliana-pizzo-826aa423a/'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Linkedin
        </motion.a>
      </section>
    </motion.footer>
  )
}
