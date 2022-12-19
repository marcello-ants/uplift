import { NextPage } from 'next'
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
                <section className='pt-20 pb-10 px-8 2xl:px-0'>
                    <div className='max-w-screen-lg mx-auto py-20'>
                        <div className='flex flex-col items-center space-y-8'>
                            <div
                                className='h-[100px] w-[100px]'
                                style={{
                                    backgroundImage: 'url(/images/logo.png)',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            />
                            <div>
                                <Typography variant='h3' className='flex-1 flex-grow-0 text-center mx-auto'>
                                    Framework for desktop
                                </Typography>
                                <Typography variant='xl' className='text-center max-w-lg mx-auto mb-6'>
                                    Welcome to your challenge operating system.
                                </Typography>
                            </div>
                            <div className='flex flex-col justify-center w-fit space-y-4'>
                                <Button link={SHARED_DATA.MACOS_SILICON_DOWNLOAD_LINK} variant='primary' size='xl'>
                                    Download for macOS Silicon
                                </Button>
                                <Button link={SHARED_DATA.MACOS_DOWNLOAD_LINK} variant='outlined' size='xl'>
                                    Download for macOS
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Partners
