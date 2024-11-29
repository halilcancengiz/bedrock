import { motion } from 'framer-motion';
import { section } from 'framer-motion/client'
import React from 'react'


const Impressum = () => {
  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  };
  return (
    <section className='px-6'>
      <div className='flex flex-col max-w-[1296px] w-full mx-auto py-[72px]'>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className='md:text-[24px] xs:text-[22px] text-[20px] font-bold mb-5 text-t-primary'>JOBSADVISION GmbH</motion.div>
        <div className='flex flex-col text-t-primary'>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className='flex flex-col mb-5'>
            <div className='font-normal text-sm'>Brucknerstraße 2</div>
            <div className='font-normal text-sm'>D-75015 Bretten</div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className='text-base font-bold'>Registergericht Amtsgericht Mannheim</motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className='flex flex-col mb-5 mt-2'>
            <div className='text-sm font-normal'>HRB-Nr.: 731879</div>
            <div className='text-sm font-normal'>Ust.-IdNr.: DE320980215</div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className='text-base font-bold'>Gerichtsstand: Amtsgericht Bretten</motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className='text-sm font-normal mb-5 mt-2'>Geschäftsführer: Sigurd Mende</motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.3 }}
            className='text-base font-bold'>Telekontakte:</motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.3 }}
            className='flex flex-col mb-5 mt-2'>
            <div className='text-sm font-normal'>Telefon: +49 (0) 7252 / 580 787 0</div>
            <div className='text-sm font-normal'>Fax: +49 (0) 7252 / 580 787 99</div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.3 }}
            className='text-base font-bold'>E-Mail:</motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className='flex flex-col mb-5 mt-2'>
            <div className='text-sm font-normal'>Allgemeine Anfragen:</div>
            <div className='text-sm font-normal'>info@jobsadvision.de</div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.3 }}
            className='text-base font-bold'>Geschäftszeiten:</motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.3 }}
            className='flex flex-col mt-2'>
            <div className='text-sm font-normal'>Montag bis Freitag: 8:00 Uhr bis 17:00 Uh</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Impressum