import { NextPage } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'
import Button from '../components/Button'

const Challenge: NextPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className='pt-20 pb-10 px-8 lg:px-0 bg-gray-100'>
                    <div className='max-w-screen-lg mx-auto py-20 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8'>
                        <div className='flex-1 flex flex-col space-y-6'>
                            <Typography variant='h3'>Earn Money with the Framework Affiliate Program</Typography>
                            <Typography variant='lg' className='font-normal'>
                                Refer visitors to Framework and earn 30% commission. Join today to turn your trusted
                                recommendations into income and grow your revenue.
                            </Typography>
                            <Button
                                link='https://framework.leaddyno.com/'
                                variant='primary'
                                size='lg'
                                className='w-fit'>
                                Sign up now
                            </Button>
                        </div>
                        <div className='flex-1'>
                            <div className='flex-1'>
                                <div className='h-[400px] w-full flex sm:flex-row flex items-center justify-center relative'>
                                    <img src='/images/partner.jpg' className='h-full w-auto rounded-lg' />
                                    <div className='rounded p-4 bg-white drop-shadow-md absolute bottom-10 -right-10 lg:right-10 flex flex-row items-center space-x-4'>
                                        <img src='/images/logomark.svg' className='h-10 w-auto' />
                                        <div className='flex-1'>
                                            <Typography variant='xl' className='font-bold mb-2'>
                                                Framework
                                            </Typography>
                                            <Typography variant='sm'>Affiliate Since 2021</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-20 px-8 lg:px-0'>
                    <div className='max-w-screen-lg mx-auto'>
                        <div className='space-y-2 pb-8'>
                            <Typography variant='h5' as='h3' className='text-center'>
                                How the Framework Affiliate Program Works
                            </Typography>
                            <Typography variant='base' className='mb-10 text-center'>
                                Share Framework with your audience and earn a 30% commission
                            </Typography>
                        </div>
                        <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 mb-10'>
                            <div className='flex-1 rounded-xl bg-gray-100 p-8'>
                                <Typography variant='xl' className='font-bold mb-4'>
                                    1. Sign up for free
                                </Typography>
                                <Typography variant='base'>
                                    Sign up for a free account. Anyone can join the Framework affiliate program and
                                    start earning.
                                </Typography>
                            </div>
                            <div className='flex-1 rounded-xl bg-gray-100 p-8'>
                                <Typography variant='xl' className='font-bold mb-4'>
                                    2. Share with your audience
                                </Typography>
                                <Typography variant='base'>
                                    To earn the commission, all you need to do is start sharing your unique link with
                                    your audience.
                                </Typography>
                            </div>
                            <div className='flex-1 rounded-xl bg-gray-100 p-8'>
                                <Typography variant='xl' className='font-bold mb-4'>
                                    3. Get paid
                                </Typography>
                                <Typography variant='base'>
                                    We send you 30% commission on transaction fees for every new customer who signs up
                                    through your link.
                                </Typography>
                            </div>
                        </div>
                        <div className='w-full text-center mb-10'>
                            <Button
                                link='https://framework.leaddyno.com/'
                                variant='primary'
                                size='lg'
                                className='inline-block'>
                                Get Started
                            </Button>
                        </div>
                        <div className='p-8 lg:p-20 flex flex-col space-y-8 border border-gray-200 rounded-lg mb-10'>
                            <Typography variant='h4' className='text-center mb-8'>
                                Frequently Asked Questions
                            </Typography>
                            <div>
                                <Typography variant='h6' className='mb-2'>
                                    What is Framework?
                                </Typography>
                                <Typography variant='base'>
                                    Framework is a platform on which to build and run a Challenge – a time-bound
                                    learning journey with a clearly defined goal. Many customers use challenges as an
                                    on-ramp into high-value offerings, such as as online courses or 1:1 coachings.
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h6' className='mb-2'>
                                    Do I need to be a Framework customer?
                                </Typography>
                                <Typography variant='base'>
                                    By default, when someone creates an account for our platform, they sign up for our
                                    free plan. We would love it if you used Framework yourself, but you are not required
                                    to be a Framework customer.
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h6' className='mb-2'>
                                    How long is your cookie life?
                                </Typography>
                                <Typography variant='base'>
                                    We currently offer a 90-day cookie life. This means from link click to sign up, if
                                    your referral signs up for Framework within 90 days (without clicking someone else’s
                                    link), you’re the affiliate of record.
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h6' className='mb-2'>
                                    How do you track conversions?
                                </Typography>
                                <Typography variant='base'>
                                    After signing up, you get a personalized affiliate link that you can start using
                                    immediately. Conversions are tracked through your unique link provided by our
                                    tracking software (LeadDyno).
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h6' className='mb-2'>
                                    How much can I earn?
                                </Typography>
                                <Typography variant='base'>
                                    You’ll earn 30% commission of the transaction fee that occurs when your referral
                                    sells products on Framework. There’s no cap on earnings. The more accounts you
                                    refer, the more you earn.
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h6' className='mb-2'>
                                    How do I get paid?
                                </Typography>
                                <Typography variant='base'>
                                    All commissions generated are paid out within 15 days working days of the next month
                                    after the payout has created. There is a minimum payout of $100 and rewards are paid
                                    out via PayPal.
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h6' className='mb-2'>
                                    Are there any joining fees?
                                </Typography>
                                <Typography variant='base'>
                                    Framework affiliate program is completely free to join – and you won’t pay any fees.
                                    Simply sign up!
                                </Typography>
                            </div>
                            <Typography variant='sm' className='mt-10' color='text-gray-500'>
                                Have more questions? Please contact our team at{' '}
                                <Link href='mailto:support@framework.so'>
                                    <a className='underline'>support@framework.so</a>
                                </Link>
                                .
                            </Typography>
                        </div>
                        <div className='p-8 lg:p-20 flex flex-col items-center justify-center space-y-8 bg-gray-100 rounded-lg'>
                            <Typography variant='h4' className='text-center'>
                                Become a Framework Affiliate Today!
                            </Typography>
                            <Typography variant='xl' className='text-center'>
                                Become a part of our success and receive commission for each sale on Framework that you
                                drive
                            </Typography>
                            <Button link='https://framework.leaddyno.com/' size='lg'>
                                Join Affiliate Program
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Challenge
