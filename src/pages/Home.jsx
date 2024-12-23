import React, { useState } from 'react'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import { BsFillClockFill, FaStar } from "../assets/icons/icons"
import stepstone from "../assets/images/stepstone.png"
import indeed from "../assets/images/indeed.png"
import jobninja from "../assets/images/jobninja.png"
import mittelstand from "../assets/images/mittelstand.png"
import InfinitySlider from '../components/InfinitySlider'
import ContactForm from '../components/ContactForm'
import InfiniteScrollTags from '../components/InfiniteScrollTags'
import * as motion from "framer-motion/client";
import cardfirsticon from "../assets/images/cardfirsticon.png"
import cardsecondicon from "../assets/images/cardsecondicon.png"
import cardthirdicon from "../assets/images/cardthirdicon.png"

import sectionFirstImage from "../assets/images/section-first-image.jpg"
import sectionSecondImage from "../assets/images/section-second-image.png"
import sectionThirdImage from "../assets/images/section-third-image.jpg"
import check from "../assets/images/check.png"
import splitStringUsingRegex from '../utils/splitStringUsingRegex'


const Home = () => {
    const [star, setStar] = useState(["1", " 2", "3", "4", "5"])
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

    const opacityAnimation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    };


    const fadeInAnimationVariantExample = {
        hidden: { opacity: 0, y: 20 },
        reveal: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.3,
                staggerChildren: 0.08,
                delayChildren: 0.4,
            },
        },
    };

    const jumbotronBoldText = `70% günstiger`
    const jumbotronBoldText2 = `schalten`
    const jumbotronTextSplit = splitStringUsingRegex(jumbotronBoldText)
    const jumbotronTextSplit2 = splitStringUsingRegex(jumbotronBoldText2)
    const charVariants9 = { hidden: { opacity: 0, color: "#4A3AFF" }, reveal: { opacity: 1, color: "#14142B" } };
    return (
        <main>
            <section className='bg-secondary px-6 pb-[72px] lg:pt-[120px] pt-[72px] overflow-hidden'>
                <div className='max-w-[1296px] w-full mx-auto flex lg:flex-row flex-col items-center xs:gap-24 gap-9'>
                    <div className='flex flex-col lg:w-1/2 max-w-[600px]  w-full'>

                        <motion.div
                            variants={fadeInAnimationVariantExample}
                            initial="hidden"
                            whileInView="reveal"
                            viewport={{ once: true }}
                            className="font-medium text-t-primary md:text-[54px] xs:text-[40px] text-[36px] md:leading-[59.4px] xs:leading-[48px] leading-[43.2px] md:mb-[23.934px] xs:mb-[17.760px] mb-[15.984px]"
                        >
                            Stellenanzeige bis zu&nbsp;
                            <motion.span
                                className="inline-flex flex-wrap-nowrap"
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                {jumbotronTextSplit.map((char, index) => (
                                    <motion.span
                                        key={index}
                                        className="font-medium inline-block"
                                        variants={charVariants9}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {char}
                                        {char === "%" ? "\u00A0" : ""}
                                    </motion.span>
                                ))}

                            </motion.span>
                            <motion.span
                                className="inline-flex flex-wrap-nowrap"
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                {jumbotronTextSplit2.map((char, index) => (
                                    <motion.span
                                        key={index}
                                        className="font-medium inline-block"
                                        variants={charVariants9}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {char}
                                        {char === "%" ? "\u00A0" : ""}
                                    </motion.span>
                                ))}

                            </motion.span>
                            
                        </motion.div>
                        <div className='flex flex-col gap-6 lg:max-w-[384px] max-w-[600px] w-full'>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className='font-medium xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary'>
                                Mit unserer Stellenpaketen erreichen Sie mit minimalen Kosten maximale Reichweite.
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.55, duration: 0.3 }}
                            >
                                <NavLink to="/contact" className="w-full">
                                    <Button className="inline-flex text-[16px]">
                                        Kontakt
                                    </Button>
                                </NavLink>
                            </motion.div>


                        </div>
                    </div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='lg:flex hidden justify-end w-1/2 relative -mt-[45px]'>
                        <div className='max-w-[498px] w-full aspect-square bg-custom-yellow md:rounded-tl-[120px] rounded-tl-[60px] relative'>
                            <div className='uppercase absolute top-[60px] left-1/2 -translate-x-1/2 bg-white text-t-primary text-xl whitespace-nowrap p-2 font-medium'>Bewerber-erfolgs-special</div>
                            <div className='absolute -left-24 -bottom-10 px-6 py-0 bg-white hxl:max-w-[410px] lg:max-w-[80%] md:max-w-[380px] w-full aspect-square'>
                                <div className='relative w-full h-full flex flex-col justify-center'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='col-span-1 flex items-center justify-between bg-secondary rounded-full px-3 py-2 gap-2'>
                                            <div>
                                                <img className="h-7 object-contain" src={stepstone} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                        <div className='col-span-1 flex items-center justify-between bg-secondary rounded-full px-3 py-2 gap-2'>
                                            <div>
                                                <img className="h-7 object-contain" src={indeed} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                        <div className='col-span-1 flex items-center justify-between bg-secondary rounded-full px-3 py-2 gap-2'>
                                            <div>
                                                <img className="h-7 object-contain" src={jobninja} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                        <div className='col-span-1 flex items-center justify-between bg-secondary rounded-full px-3 py-2 gap-2'>
                                            <div>
                                                <img className="h-7 object-contain" src={mittelstand} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center gap-2 my-7 text-sm text-center items-center'>
                                        <span className='font-medium'>Paketpreis</span> <span className='text-[#3E8F15] text-2xl font-bold '>1.495 €</span> <span className='bg-[#E3F8DE] rounded-full py-1.5 px-2 text-sm text-[#79A960] font-semibold'>52% Rabatt</span>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <Button className="inline-flex items-center justify-center">
                                            Jetzt Anfragen
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className='lg:hidden flex xs:max-w-[500px] aspect-square w-full mx-auto'>
                        <div className='w-full h-full relative bg-custom-yellow md:rounded-tl-[120px] rounded-tl-[60px] flex flex-col items-center justify-center md:gap-0 gap-5 md:p-0 p-10'>
                            <div className='uppercase md:w-auto xs:w-[90%] w-full text-center md:absolute top-[40px] md:left-1/2 md:-translate-x-1/2 bg-white text-t-primary md:text-xl xs:text-lg text-sm whitespace-nowrap p-2 font-medium'>Bewerber-erfolgs-special</div>

                            <div className='md:absolute md:-bottom-10 bottom-1/2 md:-left-10 left-1/2  md:h-[85%] xs:h-[90%] w-full md:w-[80%] xs:w-[90%]  bg-white flex flex-col p-6'>
                                <div className='relative w-full h-full flex flex-col justify-center'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='md:col-span-1 col-span-2 max-w-[250px] w-full mx-auto flex items-center justify-between bg-secondary rounded-full md:px-3 px-5 md:py-2 py-2 gap-2'>
                                            <div>
                                                <img className="md:h-7 h-5 object-contain" src={stepstone} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                        <div className='md:col-span-1 col-span-2 max-w-[250px] w-full mx-auto flex items-center justify-between bg-secondary rounded-full md:px-3 px-5 md:py-2 py-2 gap-2'>
                                            <div>
                                                <img className="md:h-7 h-5 object-contain" src={indeed} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                        <div className='md:col-span-1 col-span-2 max-w-[250px] w-full mx-auto flex items-center justify-between bg-secondary rounded-full md:px-3 px-5 md:py-2 py-2 gap-2'>
                                            <div>
                                                <img className="md:h-7 h-5 object-contain" src={jobninja} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                        <div className='md:col-span-1 col-span-2 max-w-[250px] w-full mx-auto flex items-center justify-between bg-secondary rounded-full md:px-3 px-5 md:py-2 py-2 gap-2'>
                                            <div>
                                                <img className="md:h-7 h-5 object-contain" src={mittelstand} alt="" />
                                            </div>
                                            <div className='flex items-center gap-2 whitespace-nowrap'>
                                                <BsFillClockFill color="gray" />
                                                <div className='text-gray-500 so-medium text-xs'>30 Tage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center gap-2 my-7 text-sm text-center items-center xs:flex-row flex-col'>
                                        <span className='font-medium md:text-base text-sm'>Paketpreis</span>
                                        <span className='text-[#3E8F15] md:text-2xl xs:text-xl text-2xl font-bold '>1.495 €</span>
                                        <span className='bg-[#E3F8DE] rounded-full py-1.5 px-2 md:text-base text-sm text-[#79A960] font-semibold'>52% Rabatt</span>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <Button className="inline-flex items-center justify-center">
                                            Jetzt Anfragen
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <motion.section
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className='w-full bg-white py-[72px]'>
                <div className='max-w-[1296px] w-full mx-auto'>
                    <InfinitySlider />
                </div>
            </motion.section>

            <section className='py-[72px] flex flex-col bg-white gap-y-16 px-6'>

                <div className='flex items-center justify-center max-w-[1296px] flex-col w-full mx-auto gap-4'>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='md:text-[36px] xs:text-[30px] text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary text-center'>Maximaler Mehrwert</motion.div>
                    <div className='flex flex-col items-center justify-center text-base text-t-primary '>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-medium text-center'>Stellenanzeigen mit uns zu schalten bringt Ihnen zahlreiche Vorteile.</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-medium text-center'>Die wichtigsten im Überblick:</motion.div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[26px] max-w-[1296px] w-full mx-auto">

                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='col-span-1 group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300'>
                        <NavLink to="/ads-plan" className="w-full h-full flex flex-col">
                            <div className="flex items-center flex-col gap-6">
                                <div className='max-h-[66px]'>
                                    <img src={cardfirsticon} alt="" />
                                </div>
                                <div className="text-[24px] font-medium leading-[31.2px] mb-2">Prozessübernahme</div>
                                <div className="xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular">Wir kümmern uns um den gesamten Prozess – von der Erstellung bis zur Veröffentlichung Ihrer Stellenanzeigen. Sie haben weniger Arbeit und sparen wertvolle Zeit.</div>
                            </div>

                        </NavLink>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='col-span-1 group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300'>
                        <NavLink to="/seo-plan" className="w-full h-full flex flex-col">
                            <div className="flex items-center flex-col gap-6">
                                <div className='max-h-[66px]'>
                                    <img src={cardsecondicon} alt="" />
                                </div>
                                <div className="text-[24px] font-medium leading-[31.2px] mb-2">Kosteneinsparnis</div>
                                <div className="xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular">Mit unseren Stellenpaketen sparen Sie bis zu 70 % der Kosten im Vergleich zu Einzelbuchungen.</div>
                            </div>


                        </NavLink>
                    </motion.div>

                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='col-span-1 group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300'>
                        <NavLink to="/company-listing-plan" className="w-full h-full flex flex-col">
                            <div className="flex items-center flex-col gap-6">
                                <div className='max-h-[66px]'>
                                    <img src={cardthirdicon} alt="" />
                                </div>
                                <div className="text-[24px] font-medium leading-[31.2px] mb-2">Top Beratung</div>
                                <div className="xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular">Profitieren Sie von unserer über 20-jährigen Markterfahrung. Wir wissen genau, welche Stellenmärkte am besten zu Ihren Anforderungen passen.</div>
                                <div className="md:flex hidden"></div>

                            </div>
                        </NavLink>
                    </motion.div>

                </div>

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className='flex items-center justify-center flex-col gap-4'>
                    <hr className='w-40 bg-gray-300 h-[2px]' />
                    <Button>Kontakt</Button>
                </motion.div>


            </section>

            <section className='py-[72px] bg-secondary px-6'>
                <div className='flex flex-col max-w-[1296px] w-full mx-auto gap-[72px]'>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='md:text-[36px] xs:text-[30px] text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary'>
                        Die HR Lösung für:
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        <InfiniteScrollTags />
                    </motion.div>

                </div>
            </section>


            <section className='pt-[72px] flex flex-col bg-white'>

                <motion.h2
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className='max-w-[1296px] w-full mx-auto md:text-[36px] xs:text-[30px] text-center text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary bg-white pb-[72px] px-6'>
                    Wie es funktioniert? - in 3 Simplen Schritten zum Erfolg
                </motion.h2>

                <div className='grid lg:grid-cols-2 grid-cols-1 bg-secondary max-w-[1296px] w-full mx-auto gap-y-[72px] gap-x-16 px-16 py-[72px] mb-16'>

                    <div className='col-span-1 flex flex-col gap-4'>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='text-[24px] font-medium leading-[31.2px]'>1. Stellenmarkt Auswahl</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Wählen Sie Ihre bevorzugten Stellenmärkte aus und wir erstellen für Sie ein individuelles Top-Angebot!</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Auf Wunsch beraten wir Sie persönlich und stellen ein professionelles Paket zusammen, das genau auf Ihre Spezifikationen abgestimmt ist.</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-bold'>Ihre Vorteile auf einen Blick:</motion.div>
                        <div className='flex flex-col gap-2'>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Alle Top-Stellenmärkte verfügbar</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Über 20 Jahre Agenturerfahrung</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Branchenspezifische Stellenmärkte für Ihre individuellen Bedürfnisse</div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='col-span-1 bg-custom-yellow p-5 relative'>
                        <img className='w-full h-full lg:max-h-[350px]' src={sectionFirstImage} alt="" />
                        <div className='absolute top-10 left-10 grid grid-cols-2 gap-2'>
                            <motion.div
                                variants={opacityAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='col-span-2 bg-secondary xs:flex hidden items-center justify-between gap-2 px-2 py-2 rounded-full'>
                                <img className='object-contain h-3' src={stepstone} alt="" />
                                <div className='flex items-center justify-center gap-1'>
                                    <BsFillClockFill size={11} color="gray" />
                                    <div className='text-[11px] text-t-primary'>30 Tage</div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={opacityAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className='col-span-2 bg-secondary xs:flex hidden items-center justify-between gap-2 px-2 py-2 rounded-full'>
                                <img className='object-contain h-3' src={indeed} alt="" />
                                <div className='flex items-center justify-center gap-1'>
                                    <BsFillClockFill size={11} color="gray" />
                                    <div className='text-[11px] text-t-primary'>30 Tage</div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={opacityAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className='col-span-2 bg-secondary xs:flex hidden items-center justify-between gap-2 px-2 py-2 rounded-full'>
                                <img className='object-contain h-5' src={jobninja} alt="" />
                                <div className='flex items-center justify-center gap-1'>
                                    <BsFillClockFill size={11} color="gray" />
                                    <div className='text-[11px] text-t-primary'>30 Tage</div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={opacityAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, duration: 0.3 }}
                                className='col-span-2 bg-secondary xs:flex hidden items-center justify-between gap-2 px-2 py-2 rounded-full'>
                                <img className='object-contain h-5' src={mittelstand} alt="" />
                                <div className='flex items-center justify-center gap-1'>
                                    <BsFillClockFill size={11} color="gray" />
                                    <div className='text-[11px] text-t-primary'>30 Tage</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 bg-secondary max-w-[1296px] w-full mx-auto gap-y-[72px] gap-x-16 px-16 py-[72px] mb-16'>

                    <div className='col-span-1 flex flex-col gap-4'>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='text-[24px] font-medium leading-[31.2px]'>2. Anzeigenerstellung</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Nach Auftragsbestätigung erstellen wir gemäß Ihren Spezifikationen und Wünschen Ihre professionelle Stellenanzeige und senden Ihnen einen Vorschaulink zu.</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-bold'>Ihre Vorteile auf einen Blick:</motion.div>
                        <div className='flex flex-col gap-2'>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Texterstellung</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>AGG-Check</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Vorschaulink</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Schaltung innerhalb von 48 Stunden</div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='col-span-1 bg-custom-yellow p-5'>
                        <img className='w-full h-full lg:max-h-[350px]' src={sectionSecondImage} alt="" />
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 bg-secondary max-w-[1296px] w-full mx-auto gap-y-[72px] gap-x-16 px-16 py-[72px]'>

                    <div className='col-span-1 flex flex-col gap-4'>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='text-[24px] font-medium leading-[31.2px]'>3. Bewerber ohne Ende</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Nach Ihrer Bestätigung geht Ihre Stellenanzeige online, und Sie können sich auf zahlreiche Bewerbungen freuen.</motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-bold'>Ihre Vorteile auf einen Blick:</motion.div>
                        <div className='flex flex-col gap-2'>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Kontinuierliche Betreuung Ihrer Stellenanzeige</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Gegebenenfalls Anpassungen, Budgeterhöhungen und Laufzeitverlängerungen</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Resonanzabfragen</div>
                            </motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.3 }}
                                className='flex items-center gap-2'>
                                <div>
                                    <img className='rounded-full size-[24px] min-w-[24px] min-h-[24px]' src={check} alt="" />
                                </div>
                                <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-regular'>Erweiterte Zusatzleistungen</div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='col-span-1 bg-custom-yellow p-5'>
                        <img className='w-full h-full lg:max-h-[400px]' src={sectionThirdImage} alt="" />
                    </div>
                </div>
            </section>

            <section className='py-[72px] bg-white px-6'>
                <div className='flex flex-col max-w-[660px] w-full mx-auto gap-8'>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='text-[24px] font-medium leading-[31.2px] text-center'>
                        Optimieren Sie Ihre Stellenanzeigen mit uns – schnell, einfach und professionell!
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='flex items-center justify-center flex-col gap-4'>
                        <hr className='w-40 bg-gray-300 h-[2px]' />
                        <NavLink to="/contact">
                            <Button>Kontakt</Button>
                        </NavLink>
                    </motion.div>
                </div>
            </section>

            <section className='py-[72px] bg-[#F4F3EF] flex flex-col px-6'>
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className='max-w-[1296px] w-full mx-auto mb-10  text-[46px] text-t-primary'>
                    <h2 className='md:text-[36px] xs:text-[30px] text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary'>Kundestimme:</h2>
                </motion.div>
                <div className='max-w-[1296px] w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-y-[12px] gap-x-[8px]'>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='grid-cols-1 flex flex-col border-gray-300 justify-between border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#222222' />
                                    ))
                                }
                            </div>
                            <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-medium'>“Die Resonanz war hervorragend und wir haben ca. 100 Bewerbungen erhalten. Inzwischen haben wir diverse Gespräche geführt und uns bereits für einen Kandidaten entschieden.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between gap-3'>
                            <div className='flex items-center gap-2'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl font-medium'>Prämeta GmbH & Co. KG</div>
                                    <div className=''>Klaus Mührwald</div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#222222" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='grid-cols-1 flex flex-col border-gray-300 border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#222222' />
                                    ))
                                }
                            </div>
                            <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-medium'>“Ich muss wieder ein dickes Lob an ALLE aussprechen. Wir sind super zufrieden. Alles hat gepasst von A-Z.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between gap-3'>
                            <div className='flex items-center gap-2'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl font-medium'>sh minerals GmbH</div>
                                    <div className=''>Claudia Kraft</div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#222222" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='grid-cols-1 flex flex-col border-gray-300 border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#222222' />
                                    ))
                                }
                            </div>
                            <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-medium'>“Wir möchten uns für die erfolgreiche und sehr gute Zusammenarbeit bei JOBSADVISION bedanken. Durch die extrem schnelle, kompetente und freundliche Beratung gelang es uns, die Anzeigen bestmöglich zu veröffentlichen, um dabei genügend Interessenten anzusprechen.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between gap-3'>
                            <div className='flex items-center gap-2'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl font-medium'>Tutogen Medical GmbH</div>
                                    <div className=''>Moritz Schatz</div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#222222" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='grid-cols-1 flex flex-col border-gray-300 border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#222222' />
                                    ))
                                }
                            </div>
                            <div className='xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary font-medium'>“Dank der professionellen Unterstützung und der tollen Betreuung durch das Team von Jobsadvision konnten wir unsere vakanten Stellen zügig neu besetzen.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between gap-3'>
                            <div className='flex items-center gap-2 overflow-hidden'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl line-clamp-1 font-medium'>remy - kaufmann - schöneberg Steuerberatungsgesellschaft Dipl.-Bw. (FH)</div>
                                    <div className=''>Maik Schöneberg</div>
                                </div>
                            </div>
                            <div className='min-w-[36px] min-h-[36px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#222222" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className='py-[72px] bg-white px-6'>
                <div className='max-w-[1296px] w-full mx-auto flex flex-col gap-12'>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='md:text-[36px] xs:text-[30px] text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary'>Kennzahlen auf einen Blick:</motion.div>
                    <div className='flex lg:flex-row flex-col items-center justify-center xs:gap-12 gap-6'>
                        <div className='flex flex-col w-full gap-6'>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='md:text-[36px] xs:text-[30px] text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary'>45</motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='text-[24px] font-medium leading-[31.2px]'>Eigene Jobbörsen</motion.div>
                        </div>
                        <div className='flex flex-col w-full gap-6'>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='md:text-[36px] xs:text-[30px] text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary'>2873</motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='text-[24px] font-medium leading-[31.2px]'>Zufriedene Kunden</motion.div>
                        </div>
                        <div className='flex flex-col w-full gap-6'>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='md:text-[36px] xs:text-[30px] text-[27px] md:leading-[41.4px] xs:leading-[36px] leading-[32.4px] font-medium text-t-primary'>50562</motion.div>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='text-[24px] font-medium leading-[31.2px]'>Erfolgreiche Projekte</motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

        </main>
    )
}

export default Home