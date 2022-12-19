import { NextPage } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'
import Button from '../components/Button'
import { SHARED_DATA } from '../data/common'

const Challenge: NextPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className='pt-20 pb-10 px-8 xl:px-0 '>
                    <div className='max-w-screen-lg mx-auto pt-32 space-y-4'>
                        <Typography variant='h4' as='h1'>
                            What is a Challenge?
                        </Typography>
                        <Typography variant='lg' className='font-normal'>
                            A Challenge is a time-bound learning journey with a clearly defined goal that has been
                            broken down into manageable action steps. These action steps (whether they are daily, weekly
                            or at a frequency of your choice) make the challenge’s end goal feel more attainable as the
                            participants make measurable progress towards their goal each day.
                        </Typography>
                        <div className='flex flex-col sm:flex-row space-y-8 lg:space-y-0 lg:space-x-8'></div>
                    </div>
                </section>
                <section className='px-8 lg:px-0'>
                    <div className='max-w-screen-lg mx-auto'>
                        <div className='gap-y-12 grid grid-cols-1 lg:gap-12 lg:grid-cols-5'>
                            <div className='col-span-3 space-y-4'>
                                <div className='space-y-4 pb-4'>
                                    <Typography variant='h6'>What happens during a Challenge?</Typography>
                                    <Typography variant='base'>
                                        By using Framework to create your Challenge, you can create a path that guides
                                        your audience on their journey from Point A to Point B. Between these two
                                        points, you can create a checklist of action steps that your participants are
                                        expected to complete from Day 1 through to the end of the challenge. Examples of
                                        action steps are small tasks like watching a video, responding to a journal
                                        prompt, attending a live video meeting, going for a run, sharing in a discussion
                                        forum, and anything in between!
                                    </Typography>
                                </div>
                                <div className='space-y-4 pb-4'>
                                    <Typography variant='h6'>What happens at the end of a Challenge?</Typography>
                                    <Typography variant='base'>
                                        At the end of the Challenge, i.e. at Point B, you can present participants who
                                        have successfully completed the Components a Reward. This Reward could be any of
                                        these things. - a certificate - an invitation to a community - the offer to
                                        purchase a course - the offer to book a 1:1 coaching session with you - the
                                        offer to buy a physical product - or even another Challenge!
                                    </Typography>
                                </div>
                                <div className='space-y-4 pb-4'>
                                    <Typography variant='h6'>What can I use a Challenge for?</Typography>
                                    <Typography variant='base'>
                                        Challenges are an incredibly powerful tool for helping people attain goals. They
                                        are highly engaging, help you build trust with customers, and give people
                                        low-stakes exposure to your offerings in a gamified way. While your customers
                                        use your challenge to reach their goals, your business will also benefit from: -
                                        Increased customer engagement - Natural community building - Easy lead
                                        generation - Increased product sales - ... and much more!
                                    </Typography>
                                </div>
                                <div className='space-y-4 pb-4'>
                                    <Typography variant='h6'>How much does it cost to build a Challenge?</Typography>
                                    <Typography variant='base'>
                                        Our professional plan is $99/month + 5% of sales that flow through the Framework
                                        platform. We also offer an enterprise plan which includes your own branded
                                        mobile application.
                                    </Typography>
                                </div>
                                <div className='space-y-4 pb-4'>
                                    <Typography variant='h6'>How long does it take to build a Challenge?</Typography>
                                    <Typography variant='base'>
                                        This is a function of how long your challenge is, but you could launch your
                                        challenge in less than an hour if you have your content ready to go.
                                    </Typography>
                                </div>

                                <div className='space-y-4 pb-4'>
                                    <Typography variant='h6'>Why should I use Framework?</Typography>
                                    <Typography variant='base'>
                                        Framework is the first-of-its-kind platform dedicated to hosting and running
                                        challenges. No more stitching together different tools for your challenge. With
                                        Framework, you’ll have an all-in-one platform for a superior user experience and
                                        higher success rates. Framework is also a white label solution, meaning you can
                                        use Framework to boost the visibility of your brand and strengthen the loyalty
                                        of your customers. Last but not least, Framework gives you full control of
                                        members of your community meaning your customers belong to you, not us.
                                    </Typography>
                                </div>

                                <Typography variant='base' className='mb-10' color='text-gray-500'>
                                    Have more questions? Please contact our team at{' '}
                                    <Link href='mailto:support@framework.so'>
                                        <a className='underline'>support@framework.so</a>
                                    </Link>
                                    .
                                </Typography>
                            </div>
                            <div className='col-span-2'>
                                <img src='/images/flow.png' className='w-[380px]' />
                            </div>
                        </div>

                        <div className='my-32 p-8 lg:p-20 flex flex-col items-center justify-center space-y-8 bg-gray-100 rounded-lg'>
                            <Typography variant='h4' className='text-center'>
                                Ready to see if challenges are right for your audience?
                            </Typography>
                            <Typography variant='xl' className='text-center'>
                                Start your 30-day free trial today!
                            </Typography>
                            <Button link={SHARED_DATA.DEFAULT_TRIAL_LINK} size='xl'>
                                Start free trial
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
