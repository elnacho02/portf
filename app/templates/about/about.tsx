import { motion } from 'framer-motion'
import { IoLogoFigma } from 'react-icons/io5'
import {
  SiAdobexd,
  SiMiro,
  SiNeovim,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiSketch,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { AnimatedText } from '~/components/animated-text'
import { MotionLinkButton } from '~/components/link-button'
import { SectionHeader } from '~/components/section-header'
import { SectionShell } from '~/components/section-shell'

export const About = () => {
  return (
    <SectionShell id='about'>
      <SectionHeader heading='About' />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16'
      ></motion.section>

      <section className='relative mt-10 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16'>
        <section className='col-span-full md:col-span-6 xl:col-span-8'>
          <motion.article
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
          >
            <AnimatedText
              as='h3'
              text='Who am I'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <AnimatedText
              as='p'
              text='Hi, my name is Giuliana, and I am a 19-year-old aspiring UX/UI designer based in Tucumán, Argentina.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='Despite my young age, I am passionate about creating user-centered digital products that not only look good but are also intuitive and functional. I am currently studying UX/UI advanced course and have been honing my skills through various personal projects and online courses.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='I am well-versed in design tools such as Figma, Sketch, and Adobe Experience. I have a keen eye for detail and a knack for solving complex problems with simple and elegant design solutions. I believe that design should not only meet user needs but also enhance their overall experience. I am constantly researching and staying up-to-date with the latest design trends and technologies to ensure that my work is both relevant and innovative. I am eager to collaborate with others and bring my creativity and passion to a dynamic team.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='I am open to constructive criticism and always willing to learn and grow as a designer.
              Please take a look at my portfolio to see some of my work and if you like what you see, I would love to hear from you! Thank you for considering me.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
          </motion.article>

          <motion.section
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
            className='col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8'
          >
            <AnimatedText
              as='h3'
              text='Tech I enjoy'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: 'circOut' },
                },
              }}
              className='mt-6 flex flex-wrap gap-6 text-dark-300'
            >
              <IoLogoFigma size={48} title='Figma' />
              <SiSketch size={48} title='Sketch' />
              <SiAdobexd size={48} title='AdobeXD' />
              <SiMiro size={48} title='Miro' />
            </motion.div>
          </motion.section>
        </section>

        <motion.figure
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: 'beforeChildren',
                delayChildren: 0.15,
                delay: 0.25,
              },
            },
          }}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          viewport={{ once: true }}
          style={{ backgroundColor: '#d4d4d4' }}
          className='mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9'
        >
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
              },
            }}
            src='/assets/guilianapizzo.jpeg'
            alt='Portrait of Giuliana Pizzo'
            height={400}
            width={400}
          />
        </motion.figure>
      </section>
    </SectionShell>
  )
}
