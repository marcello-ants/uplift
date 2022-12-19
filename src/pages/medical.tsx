import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'
import Button from '../components/Button'
import CTACard from '../blocks/shared/CTACard'
import { SHARED_DATA } from '../data/common'

const Medical: NextPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className='flex flex-col space-y-40'>
                    <div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 pt-32 pb-10 lg:py-48 justify-center'>
                        <div className='col-span-6 px-8'>
                            <div className='transform lg:translate-y-10 flex flex-col space-y-6'>
                                <Typography variant='h3' className='text-left'>
                                    For Medical Professionals
                                </Typography>
                                <Typography variant='xl' as='h2' className='font-normal text-left'>
                                    Change patient lives for the better with challenges designed to drive adherence.
                                    With the challenge structure, patients are exponentially more likely to follow
                                    treatment plans or wellness programs.
                                </Typography>
                                <div className='flex flex-col space-y-3 items-center justify-left sm:flex-row sm:space-x-3 sm:space-y-0 lg:justify-start'>
                                    <Button
                                        link={SHARED_DATA.DEMO_LINK}
                                        variant='primary'
                                        size='lg'
                                        className='w-full sm:w-auto'>
                                        Start Building
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-6 relative -mx-2 px-10 py-4 lg:px-0 lg:mx-0'>
                            <div className='lg:absolute lg:top-0 lg:left-0 lg:w-[780px] lg:h-[560px] -mt-14 lg:bg-cover lg:bg-top bg-gray-200'>
                                {/* <img src={images[image]} className='rounded-md drop-shadow-lg border' /> */}
                                Placeholder
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-row mx-auto max-w-screen-xl px-8'>
                        <div className='flex-1 flex flex-col gap-4 md:flex-row md:gap-8 w-full border p-4 rounded-lg'>
                            <div className='flex-col col-span-1 flex items-center space-y-2'>
                                <img
                                    src={'/images/testimonials/dr-b-paul.jpg'}
                                    className='rounded-full w-12 h-12'
                                    alt='Testimonial avatar'
                                />
                                <div className='flex-col flex items-center'>
                                    <Typography variant='base' color='text-black' className='font-bold'>
                                        Dr. B Paul
                                    </Typography>
                                    <Typography variant='base' color='text-black'>
                                        Endocrinologist
                                    </Typography>
                                </div>
                            </div>
                            <div className='flex w-full'>
                                <Typography variant='lg' className='font-normal'>
                                    &quot;I built a challenge for my diabetic patients to help them lose weight. By
                                    combining education materials with exercise toutines and diets, I&apos;m finally
                                    able to scale my impact. Framework&apos;s advanced analytics give me the insights I
                                    need to understand exactly what my challenge participants have and haven&apos;t done
                                    - allowing me to tailor my care. Patients receive the information and guidance they
                                    need via the structure of a challenge. I, in turn, can spend more time with my
                                    family as patients have stopped calling me to ask the same questions again and
                                    again.&quot;
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex flex-col max-w-screen-md mx-10 xl:mx-auto space-y-10 items-center justify-center'>
                        <div>
                            <Typography variant='h2' className='flex-1 flex-grow-0 text-center mx-auto'>
                                The Four Week Plan
                            </Typography>
                            <Typography variant='xl' className='text-center max-w-lg mx-auto mb-6'>
                                Start Framework with a personalized 4-week plan to launch your first Challenge
                                successfully. Our dedicated expert team will put your Challenge on the best-case
                                scenario trajectory.
                            </Typography>
                        </div>
                    </div>
                    <Steps /> */}

                    <CTACard
                        header='Build a challenge to help patients follow their treatment plan'
                        subheader='Free for 14 Days'
                        detail='Get started with a 14 day free trial.'
                        buttonText='Start free trial'
                        buttonLink={SHARED_DATA.DEFAULT_TRIAL_LINK}
                        buttonVariant='primary'
                    />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Medical
