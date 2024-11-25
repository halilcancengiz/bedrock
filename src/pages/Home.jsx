import React from 'react'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import { BsFillClockFill } from "../assets/icons/icons"
import stepstone from "../assets/images/stepstone.png"
import indeed from "../assets/images/indeed.png"
import jobninja from "../assets/images/jobninja.png"
import mittelstand from "../assets/images/mittelstand.png"

const Home = () => {
    return (
        <section color="gray" tion className='bg-secondary px-6 py-[72px]'>
            <div className='max-w-[1296px] w-full mx-auto flex items-center xs:gap-12 gap-9'>
                <div className='flex flex-col w-1/2'>
                    <h1 className='ss-medium text-t-primary text-[54px] leading-[59.4px] md:mb-[23.934px] xs:mb-[17.760px] mb-[15.984px]'>
                        Stellenanzeige bis zu 70% günstiger schalten
                    </h1>
                    <div className='flex flex-col gap-6 max-w-[384px] w-full'>
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
                                <div className='my-10 so-regular text-sm text-center items-center'>
                                    Paketpreis <span className='text-[#3E8F15] text-2xl so-bold'>1.495 €</span> <span className='bg-[#E3F8DE] rounded-full p-2 text-sm text-[#79A960]'>52% Rabatt</span>
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

    )
}

export default Home