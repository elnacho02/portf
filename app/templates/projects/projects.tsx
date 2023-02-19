import { motion } from 'framer-motion'
import { VscArrowRight } from 'react-icons/vsc'

import { AnimatedText } from '~/components/animated-text'
import { MotionLinkButton } from '~/components/link-button'
import { ProjectItem } from '~/components/project-item'
import { SectionHeader } from '~/components/section-header'
import { SectionShell } from '~/components/section-shell'

import { projects } from '../../../projects'

export const Projects = () => {
  return (
    <SectionShell id='projects'>
      <SectionHeader heading='Projects' />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16'
      >
        <AnimatedText
          as='p'
          className='col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8'
          text='Check out a few of the main projects I have worked on.'
        />
      </motion.section>

      <motion.div
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='mt-24 flex'
      >
        <motion.section
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          viewport={{ once: true }}
          className='relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16'
        >
          {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </motion.section>
      </motion.div>
    </SectionShell>
  )
}
