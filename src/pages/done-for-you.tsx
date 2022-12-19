import { NextPage } from 'next'
import Steps from '../blocks/misc/Steps'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'
import Button from '../components/Button'
import CTACard from '../blocks/shared/CTACard'
import { SHARED_DATA } from '../data/common'

const DoneForYou: NextPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className='flex flex-col space-y-20 mb-10'>
                    <div className='bg-gray-100'>
                        <div className='flex flex-col mt-40 mb-20 max-w-screen-md px-6 mx-auto space-y-10 items-center justify-center'>
                            <Typography variant='h3' className='flex-1 flex-grow-0 text-center mx-auto'>
                                You bring your content, we take care of the rest.
                            </Typography>
                            <Typography variant='xl' className='text-center max-w-lg mx-auto mb-6'>
                                Launch your challenge in 30 days with our{' '}
                                <span className='font-bold'>Done for You</span> package. Our dedicated expert team will
                                strategize with you and do all the heavy lifting needed to launch your challenge.
                            </Typography>
                            <div className='flex justify-center'>
                                <Button link={SHARED_DATA.CALL_LINK} variant='primary' size='xl'>
                                    Schedule a call
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Steps />
                </section>

                <CTACard
                    header='It’s never been easier to launch a challenge.'
                    subheader='Free for 14 Days'
                    detail='Ready to get started?'
                    buttonText='Schedule a call'
                    buttonLink={SHARED_DATA.CALL_LINK}
                    buttonVariant='primary'
                />
                {/* <CTA /> */}
            </main>
            <Footer />
        </>
    )
}

export default DoneForYou
