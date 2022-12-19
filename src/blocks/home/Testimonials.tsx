import React from 'react'
import Typography from '../../components/Typography'
import Testimonial from '../../components/Testimonial'
import { SHARED_DATA } from '../../data/common'

const Testimonials = (): React.ReactElement => (
    <section>
        <div className='flex flex-col space-y-16 px-8 items-center justify-center relative'>
            <Typography variant='h3' className='text-center max-w-3xl mx-auto'>
                Loved by entrepreneurs who are making an impact
            </Typography>
            <div className='flex flex-col justify-center relative max-w-screen-xl md:flex-row mx-0 md:mx-auto space-y-8 md:space-y-0 md:space-x-8'>
                <Testimonial
                    name='Dr. B Paul'
                    image='/images/testimonials/dr-b-paul.jpg'
                    tagline={
                        <span className='text-sm'>
                            Board-Certified Endocrinologist helping patients reverse Type 2 Diabetes
                        </span>
                    }>
                    Only hours after making my account, Framework was empowering my patients to take an active role in
                    their health while connecting with others on the same journey. Supplementing my appointments with
                    Framework’s toolkit of wellness widgets is the best choice I have ever made for my practice.
                </Testimonial>
                <Testimonial
                    name='Denis Panjuta'
                    image='/images/testimonials/denis.png'
                    tagline={
                        <span className='text-sm'>Teaching over 200,000 thousand people to code using challenges</span>
                    }>
                    After years of looking for a platform that could give me a closer connection to my audience, I found
                    Framework. My challenge built on Framework has given me a new way of sharing my knowledge that
                    naturally creates a closer, more trusting relationship between me and my audience. Not to mention,
                    the support I receive from the Framework team is incredible.
                </Testimonial>
                <Testimonial
                    name='Michael Collins'
                    image='/images/testimonials/michael-collins.jpg'
                    tagline={
                        <span className='text-sm'>
                            Health Coach to over 100,000 people on a mission to change their relationship with Sugar
                        </span>
                    }>
                    Best of all, I know my challenge is working because Framework gives me the engagement and retention
                    data to prove it. This is the best platform for a private, distraction-free environment to build a
                    supportive, healing community around challenges.
                    {/* <span className='text-sm'>
                    Health Coach to 100K people changing their relationship with Sugar 22% of 774 members in his paid
                    Sugar Free Challenge <span className='text-black'>have signed up for paid 1:1 coaching</span>
                </span> */}
                </Testimonial>
            </div>
        </div>
    </section>
)

export default Testimonials
