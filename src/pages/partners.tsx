import { NextPage } from 'next'
import Script from 'next/script'
import Steps from '../blocks/misc/Steps'
import Explainer from '../blocks/home/Explainer'
import Logos from '../blocks/home/Logos'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'
import Button from '../components/Button'
import { SHARED_DATA } from '../data/common'

const Partners: NextPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className='mt-40 flex flex-col space-y-20 mb-10'>
                    <div className='flex flex-col max-w-screen-md mx-10 xl:mx-auto space-y-10 items-center justify-center'>
                        <div>
                            <Typography variant='h2' className='flex-1 flex-grow-0 text-center mx-auto'>
                                The Partners Program
                            </Typography>
                            <Typography variant='xl' className='text-center max-w-lg mx-auto mb-6'>
                                A four week plan to launch your first challenge
                            </Typography>
                            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                <iframe
                                    src='https://player.vimeo.com/video/696622454?h=73aa177993'
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    frameBorder={0}
                                    allow='autoplay; fullscreen; picture-in-picture'
                                    allowFullScreen
                                />
                            </div>
                            <Script src='https://player.vimeo.com/api/player.js' />
                            <div className='flex justify-center mt-6'>
                                <Button link={SHARED_DATA.DEMO_LINK} variant='primary' size='lg'>
                                    Buy now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Explainer padNav={false} />
                    <Logos label='Trusted by the best.' />
                    <div className='flex flex-col max-w-screen-md mx-10 xl:mx-auto space-y-10 items-center justify-center'>
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
                    <Steps />
                    <div className='p-8 lg:p-20 flex flex-col items-center justify-center space-y-8 bg-gray-100 rounded-lg mx-10 lg:mx-auto max-w-screen-lg'>
                        <Typography variant='h4' className='text-center'>
                            It’s never been easier to launch a challenge.
                        </Typography>
                        <Typography variant='xl' className='text-center'>
                            Ready to get started?
                        </Typography>
                        <Button link={SHARED_DATA.DEMO_LINK} variant='primary' size='lg'>
                            Buy now
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Partners
