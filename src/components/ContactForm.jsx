import React from 'react'
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";
import Button from './Button';




const ContactForm = () => {
    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };

    const scaleAnimationVariant = {
        initial: {
            opacity: 0,
            scale: 0.7
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };

    return (
        <section className="py-[72px] overflow-hidden flex items-center justify-center relative bg-secondary z-10">
            <div className="max-w-[1296px] w-full mx-auto flex lg:flex-row flex-col items-start  justify-between">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.30, duration: 0.3 }}
                    className="max-w-[487px] lg:mb-0 mb-20 lg:-mt-[50px] lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10 ">
                    <div className="mt-10 col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-t-primary mb-5">Jetzt Anfragen</div>
                    <div className="leading-[30px] text-t-primary text-[18px] tb-medium mb-10">
                        Lassen Sie uns gemeinsam Ihre Ziele erreichen, mehr Bewerber erhalten und ihre vakanten Stellen besetzen.
                    </div>
                    <div className='flex flex-col gap-y-4 md:flex-nowrap flex-wrap'>
                        <div style={{ boxShadow: '0px 8px 44px 0px rgba(8, 15, 52, 0.03)' }} className='group cursor-pointer rounded-md bg-white flex  gap-x-3 hover-up-md  py-[21px] px-6 border border-neutral-300'>
                            <div className="bg-secondary size-12 min-w-12 min-h-12 p-2.5  mr-[25px] overflow-hidden group/parent">
                                <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                    <path opacity="0.35" d="M29.75 32H5.25C2.35025 32 0 29.6497 0 26.75V9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25V26.75C35 29.6497 32.6497 32 29.75 32Z" fill="gray" />
                                    <path d="M13.8985 17.5888L0 9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25L21.1015 17.5888C18.8842 18.9188 16.1158 18.9188 13.8985 17.5888Z" fill="#262626" />
                                </svg>
                            </div>

                            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className='flex flex-col items-center justify-center text-white flex-wrap'>
                                <div className='so-bold text-t-primary text-[18px] group-hover:text-primary transition-colors duration-300 break-all'>{`${import.meta.env.VITE_CONTACT_EMAIL}`}</div>
                            </a>
                        </div>
                        <div style={{ boxShadow: '0px 8px 44px 0px rgba(8, 15, 52, 0.03)' }} className='group cursor-pointer rounded-md bg-white flex items-center gap-x-3 hover-up-md py-[21px] px-6 border border-neutral-300'>
                            <div className="bg-secondary size-12 min-w-12 min-h-12 p-2.5  mr-[25px] overflow-hidden group">
                                <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                    <g clipPath="url(#clip0)">
                                        <path opacity="0.35" d="M0.152786 8.03404C0.547467 10.9728 2.09241 17.7268 8.1833 23.8177C14.2742 29.9086 21.0264 31.4536 23.967 31.8483C26.0969 32.3087 28.4063 31.7238 30.0614 30.0686C32.65 27.4801 23.2736 18.1037 20.6851 20.6923L19.0335 22.3439L9.65714 12.9676L11.307 11.3159C13.8955 8.7274 4.51917 -0.648943 1.93063 1.9396C0.275457 3.59477 -0.309453 5.90419 0.152786 8.03404Z" fill="#262626" />
                                        <path d="M1.93652 1.93629L11.3111 11.3109C13.8943 8.72054 13.8943 4.52839 11.3058 1.93985C8.72077 -0.645134 4.52684 -0.646912 1.93652 1.93629Z" fill="#262626" />
                                        <path d="M20.6885 20.6902L30.063 30.0648C32.6462 27.4762 32.6462 23.2823 30.0577 20.6938C27.4709 18.1088 23.2788 18.107 20.6885 20.6902Z" fill="#262626" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="35" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} className='flex flex-col items-center justify-center text-white'>
                                <div className='so-bold text-t-primary text-[18px] group-hover:text-primary transition-colors duration-300'>{`${import.meta.env.VITE_CONTACT_PHONE}`}</div>
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.80, duration: 0.3 }}
                    style={{ boxShadow: '0px 2px 11px 0px rgba(31, 37, 89, 0.08)' }}
                    className="lg:max-w-[600px] max-w-[660px] lg:min-w-[542px] border border-neutral-300 rounded-md w-full lg:py-[70px] lg:px-[55px] md:px-[46px] px-[35px] md:py-[58px] sm:[48px] py-[40px] relative bg-white"
                >
                    <form onSubmit={() => navigate("/thank-you-page")} className="grid grid-cols-2 gap-[20px] bg-white">
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="firstname" className="xs:text-[18px] text-base so-bold">Vorname</label>
                            <input id="firstname" name="firstname" required placeholder="Max" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="lastname" className="xs:text-[18px] text-base so-bold">Name</label>
                            <input id="lastname" name="lastname" required placeholder="Mustermann" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="email" className="xs:text-[18px] text-base so-bold">E-Mail</label>
                            <input id="email" name="email" required placeholder="name@domain.de" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="email" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="phonenumber" className="xs:text-[18px] text-base so-bold">Telefonnummer<span className="so-medium text-t-primary ml-1">(optional)</span></label>
                            <input id="phonenumber" placeholder="0123 4567890" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="number" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="companyname" className="xs:text-[18px] text-base so-bold">Firma<span className="so-medium text-t-primary ml-1">(optional)</span></label>
                            <input id="companyname" name="companyname" placeholder="Mustermann GmbH" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="street" className="xs:text-[18px] text-base so-bold">Straße, Nr.<span className="so-medium text-t-primary ml-1">(optional)</span></label>
                            <input id="street" name="street" placeholder="Musterstraße 1" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="zipcode" className="xs:text-[18px] text-base so-bold">PLZ<span className="so-medium text-t-primary ml-1">(optional)</span></label>
                            <input id="zipcode" name="zipcode" placeholder="12345" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="number" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                            <label htmlFor="location" className="xs:text-[18px] text-base so-bold">Ort<span className="so-medium text-t-primary ml-1">(optional)</span></label>
                            <input id="location" name="location" placeholder="Musterstadt" className="placeholder:text-t-primary text-t-primary py-2 px-5 h-[48px] border  hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                        </div>

                        <div className="col-span-2 flex flex-col gap-3">
                            <label htmlFor="message" className="xs:text-[18px] text-base so-bold">Nachricht<span className="so-medium text-t-primary ml-1">(optional)</span></label>
                            <textarea id="message" name="message" placeholder="Nachricht" className="bplaceholder placeholder:text-t-primary text-t-primary focus:outline-none border  py-[17px] h-28 px-5 xs:text-[18px] text-base resize-none hover:border-primary focus:border-primary transition-colors duration-300"></textarea>
                        </div>

                        <div className="col-span-2 flex items-start gap-3">
                            <div>
                                <input id="termandconditions" required className="size-5 mt-1 border-none outline-none ring-0 !accent-primary" type="checkbox" />
                            </div>
                            <label htmlFor="termandconditions" className="text-sm text-t-primary flex-wrap so-medium">Mit dem Absenden des Formulars akzeptieren Sie die <NavLink aria-label="Open term and conditions  page" to="/datenschutz" className="text-primary cursor-pointer tb-medium">Datenschutzerklärung.</NavLink></label>
                        </div>
                        <div className="col-span-2">
                            <div className='xs:inline-flex'>
                                <Button aria-label="Submit form" type="submit" className="so-bold md:w-auto w-full ">Absenden</Button>
                            </div>
                        </div>
                    </form>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }} className="absolute -left-[36px] -top-[49px] size-[205px] z-[-1] bg-custom-yellow">
                    </motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="absolute -right-[81px] -bottom-[67px] size-[208px] z-[-1] bg-[#4A3AFF]">
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default ContactForm