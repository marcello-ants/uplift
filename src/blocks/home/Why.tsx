import React from 'react'
import Typography from '../../components/Typography'

const WhyNumber = ({ index }: { index: number }): React.ReactElement => (
    <div className='w-full relative flex flex-col items-center justify-start space-y-2 lg:items-start'>
        <div className='w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center'>
            <Typography variant='h6' color='text-alpha-black'>
                0{index}
            </Typography>
        </div>
    </div>
)

const Why = (): React.ReactElement => (
    <section>
        <div className='flex flex-col space-y-16 items-center justify-center relative mb-20 bg-primary-100 py-20'>
            <div className='max-w-lg mx-10 xl:mx-auto'>
                <Typography variant='h3' className='text-center max-w-lg mx-auto'>
                    Why Framework?
                </Typography>
            </div>
            <div className='relative max-w-screen-lg flex flex-col lg:flex-row items-start space-y-20 lg:space-y-0 lg:space-x-0'>
                <div className='flex flex-col space-y-8 px-8 items-start justify-start'>
                    <Typography variant='h5' className='text-start'>
                        Jumping between platforms is expensive and exhausting.
                    </Typography>
                    <Typography varaint='base' className='text-start text-black'>
                        Jumping between platforms is expensive and exhausting. Frankensteining a bunch of platforms
                        together for your offering is a pain. First you have to manage all those different accounts,
                        then pay all the fees, and finally try to strap it all together in a way that makes sense.
                        Measuring your impact is impossible when your customer’s data is split between five different
                        platforms. <br />
                        <br />
                        With Framework, you can host every part of a challenge in one place, see who’s dropping off
                        where, and have the tools to quantify and prove your impact.
                    </Typography>
                </div>
                <div className='flex flex-col space-y-8 px-8 items-start justify-start'>
                    <Typography variant='h5' className='text-start'>
                        Your customers are getting lost and dropping off.
                    </Typography>
                    <Typography varaint='base' className='text-start text-black'>
                        If you’re confused, you can be sure your customers are even more confused. You’re losing
                        customers in those jumps between platforms. Even if you do manage retain a customer, retaining
                        that person’s attention is near-impossible as they hop from one distraction to the next on a
                        platform that isn’t designed for your use case.
                        <br />
                        <br /> It’s time to consolidate your offering. When you host everything in one place on
                        Framework, your customers can still have it all but without the confusion.
                    </Typography>
                </div>
            </div>
        </div>
    </section>
)

export default Why
