import React from 'react'
import Typography from '../../components/Typography'
import Card from '../../components/Card'
import Magnet from '../../components/Magnet'

const FeatureCard = ({
    variant,
    icon,
    header,
    subheader,
    featureOne,
    featureTwo,
    featureThree,
    featureFour
}: {
    variant: string
    icon: string
    header: string
    subheader: string
    featureOne: string
    featureTwo: string
    featureThree: string
    featureFour: string
}): React.ReactElement => {
    return (
        // @ts-ignore
        <Card variant={variant}>
            <div className='flex flex-col space-y-6 justify-center relative '>
                <img src={icon} className='w-12 h-12 mx-auto' />
                <Typography variant='h5' className='text-center'>
                    {header}
                </Typography>
                <Typography variant='base' className='text-center'>
                    {subheader}
                </Typography>
                <div className='flex flex-col w-full  ml-6 items-center justify-start'>
                    <ul className='flex flex-col space-y-1 items-start justify-start w-[250px]'>
                        <li className='flex flex-row space-x-2 items-start justify-start'>
                            <img src='/images/icons/tick.svg' className='w-5 h-5' />
                            <Typography variant='base' className='font-bold text-black'>
                                {featureOne}
                            </Typography>
                        </li>
                        <li className='flex flex-row space-x-2 items-start justify-start'>
                            <img src='/images/icons/tick.svg' className='w-5 h-5' />
                            <Typography variant='base' className='font-bold text-black'>
                                {featureTwo}
                            </Typography>
                        </li>
                        <li className='flex flex-row space-x-2 items-start justify-start'>
                            <img src='/images/icons/tick.svg' className='w-5 h-5' />
                            <Typography variant='base' className='font-bold text-black'>
                                {featureThree}
                            </Typography>
                        </li>
                        <li className='flex flex-row space-x-2 items-start justify-start'>
                            <img src='/images/icons/tick.svg' className='w-5 h-5' />
                            <Typography variant='base' className='font-bold text-black'>
                                {featureFour}
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}

const Features = (): React.ReactElement => (
    <section>
        <div className='flex flex-col space-y-16 px-8 items-center justify-center relative'>
            <Typography variant='h3' className='text-center max-w-3xl mx-auto'>
                Keep it simple by running everything with Framework
            </Typography>
            <div className='space-y-6'>
                <div className='max-w-screen-xl flex flex-col lg:flex-row space-x-0 lg:space-x-6 space-y-6 lg:space-y-0'>
                    <FeatureCard
                        variant='orange'
                        icon='/images/icons/chart.svg'
                        header='Challenges'
                        subheader='Take your members on a guided journey towards a shared goal.'
                        featureOne='Drip feed scheduling'
                        featureTwo='Cohorts or individual'
                        featureThree='Assignments and journaling'
                        featureFour='Completion analytics'
                    />
                    <FeatureCard
                        variant='green'
                        icon='/images/icons/people.svg'
                        header='Community'
                        subheader='Offer community spaces for a sense of belonging and accountability.'
                        featureOne='Message boards'
                        featureTwo='Group chat'
                        featureThree='Live audio calls'
                        featureFour='Direct messages'
                    />
                    <FeatureCard
                        variant='yellowTop'
                        icon='/images/icons/lock.svg'
                        header='Memberships'
                        subheader='Extend the value of your challenge by creating membership options for your participants.'
                        featureOne='Paid memberships'
                        featureTwo='Recurring subscriptions'
                        featureThree='Discount codes'
                        featureFour='In-app upsells'
                    />
                </div>
                <Magnet />
            </div>
        </div>
    </section>
)

export default Features
