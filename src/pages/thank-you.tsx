import { NextPage } from 'next'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'

const Partners: NextPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className='mt-40 flex flex-col space-y-20 mb-10 px-8'>
                    <div className='flex flex-col max-w-screen-md mx-auto space-y-5 pb-80 items-center justify-center'>
                        <Typography variant='h3' className='flex-1 flex-grow-0 text-center mx-auto'>
                            Thank you
                        </Typography>
                        <Typography variant='xl' className='text-center max-w-lg mx-auto mb-6'>
                            Thank you for booking an appointment. We look forward to speaking with you and sharing how
                            challenges can transform your business.
                        </Typography>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Partners
