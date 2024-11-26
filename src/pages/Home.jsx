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


const Home = () => {
    const [star, setStar] = useState(["1", " 2", "3", "4", "5"])
    return (
        <main>
            <section className='bg-secondary px-6 py-[72px] overflow-hidden'>
                <div className='max-w-[1296px] w-full mx-auto flex lg:flex-row flex-col items-center xs:gap-12 gap-9'>
                    <div className='flex flex-col lg:w-1/2 max-w-[660px] w-full '>
                        <h1 className='ss-medium text-t-primary text-[54px] leading-[59.4px] md:mb-[23.934px] xs:mb-[17.760px] mb-[15.984px]'>
                            Stellenanzeige bis zu 70% günstiger schalten
                        </h1>
                        <div className='flex flex-col gap-6 lg:max-w-[384px] max-w-[600px] w-full'>
                            <div className='so-medium xs:text-[16px] text-[14px] xs:leading-[24px] leading-[21px] text-t-primary'>
                                Then use this short paragraph of text to add some extra information and entice the viewer to read the rest of the page.
                            </div>
                            <NavLink to="/contact" className="w-full">
                                <Button className="inline-flex text-[16px]">
                                    Kontakt
                                </Button>
                            </NavLink>

                        </div>
                    </div>
                    <div className='flex justify-end w-1/2 relative'>
                        <div className='max-w-[498px] w-full aspect-square bg-custom-yellow md:rounded-tl-[120px] rounded-tl-[60px] relative'>
                            <div className='uppercase absolute top-[60px] left-1/2 -translate-x-1/2 bg-white text-t-primary text-xl whitespace-nowrap p-2 so-medium'>Bewerber-erfolgs-special</div>
                            <div className='absolute -left-24 -bottom-10 p-6 bg-white max-w-[410px] w-full aspect-square'>
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
                                    <div className='my-10 text-sm text-center items-center'>
                                        <span className='so-medium'>Paketpreis</span> <span className='text-[#3E8F15] text-2xl so-bold '>1.495 €</span> <span className='bg-[#E3F8DE] rounded-full p-2 text-sm text-[#79A960] so-semibold'>52% Rabatt</span>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <Button className="inline-flex items-center justify-center">
                                            Jetzt Anfragen
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full bg-secondary py-[72px]'>
                <div className='max-w-[1296px] w-full mx-auto'>
                    <InfinitySlider />
                </div>
            </section>

            <section className='py-[72px] bg-[#F4F3EF] flex flex-col'>
                <div className='max-w-[1296px] w-full mx-auto mb-10 so-bold text-[46px] text-t-primary'>Kundestimme:</div>
                <div className='max-w-[1296px] w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-y-[12px] gap-x-[8px]'>
                    <div className='grid-cols-1 flex flex-col rounded-lg border-gray-300 justify-between border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#D1FA5E' />
                                    ))
                                }
                            </div>
                            <div className='text-t-primary'>“Die Resonanz war hervorragend und wir haben ca. 100 Bewerbungen erhalten. Inzwischen haben wir diverse Gespräche geführt und uns bereits für einen Kandidaten entschieden.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl so-bold'>Prämeta GmbH & Co. KG</div>
                                    <div className='so-regular'>Klaus Mührwald</div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#DAFF45" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1 flex flex-col rounded-lg border-gray-300 border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#D1FA5E' />
                                    ))
                                }
                            </div>
                            <div className='text-t-primary'>“Ich muss wieder ein dickes Lob an ALLE aussprechen. Wir sind super zufrieden. Alles hat gepasst von A-Z.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl so-bold'>sh minerals GmbH</div>
                                    <div className='so-regular'>Claudia Kraft</div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#DAFF45" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1 flex flex-col rounded-lg border-gray-300 border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#D1FA5E' />
                                    ))
                                }
                            </div>
                            <div className='text-t-primary'>“Wir möchten uns für die erfolgreiche und sehr gute Zusammenarbeit bei JOBSADVISION bedanken. Durch die extrem schnelle, kompetente und freundliche Beratung gelang es uns, die Anzeigen bestmöglich zu veröffentlichen, um dabei genügend Interessenten anzusprechen.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl so-bold'>Tutogen Medical GmbH</div>
                                    <div className='so-regular'>Moritz Schatz</div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#DAFF45" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1 flex flex-col rounded-lg border-gray-300 border xs:py-[30px] xs:px-[40px] py-[24px] px-[24px]'>
                        <div className='flex flex-col flex-1'>
                            <div className='flex mb-4'>
                                {
                                    star && star.map((index) => (
                                        <FaStar size={20} className='mr-1' color='#D1FA5E' />
                                    ))
                                }
                            </div>
                            <div className='text-t-primary'>“Dank der professionellen Unterstützung und der tollen Betreuung durch das Team von Jobsadvision konnten wir unsere vakanten Stellen zügig neu besetzen.”</div>
                        </div>

                        <div className='mt-[50px] flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='size-12 min-w-12 min-h-12 bg-white border border-gray-300 rounded-full'></div>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-xl so-bold'>remy - kaufmann - schöneberg Steuerberatungsgesellschaft Dipl.-Bw. (FH)</div>
                                    <div className='so-regular'>Maik Schöneberg</div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C16 30.1217 15.1571 32.1566 13.6569 33.6569C12.1566 35.1571 10.1217 36 8 36C5.87827 36 3.84344 35.1571 2.34315 33.6569C0.842854 32.1566 0 30.1217 0 28C0 23.58 8 0 8 0H12L8 20C10.1217 20 12.1566 20.8429 13.6569 22.3431C15.1571 23.8434 16 25.8783 16 28ZM36 28C36 30.1217 35.1571 32.1566 33.6569 33.6569C32.1566 35.1571 30.1217 36 28 36C25.8783 36 23.8434 35.1571 22.3431 33.6569C20.8429 32.1566 20 30.1217 20 28C20 23.58 28 0 28 0H32L28 20C30.1217 20 32.1566 20.8429 33.6569 22.3431C35.1571 23.8434 36 25.8783 36 28Z" fill="#DAFF45" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-[72px] bg-white'>
                <div className='max-w-[1296px] w-full mx-auto flex flex-col gap-12'>
                    <div className='lg:text-[76px] md:text-[57px] text-[32px] so-regular text-t-primary'>Kennzahlen auf einen Blick:</div>
                    <div className='flex lg:flex-row flex-col items-center justify-center gap-12'>
                        <div className='flex flex-col w-full'>
                            <div className='lg:text-[76px] md:text-[57px] text-[32px] so-reqular text-t-primary'>45%</div>
                            <div className='text-[24px]'>Increase in hiring efficiency</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='lg:text-[76px] md:text-[57px] text-[32px] so-reqular text-t-primary'>60%</div>
                            <div className='text-[24px]'>Faster Onboarding</div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='lg:text-[76px] md:text-[57px] text-[32px] so-reqular text-t-primary'>2x</div>
                            <div className='text-[24px]'>Increase in candidate quality</div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

        </main>
    )
}

export default Home