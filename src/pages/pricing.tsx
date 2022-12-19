import React from 'react'
import { NextPage } from 'next'
import Button from '../components-v2/Button'
import CTA from '../blocks-v2/home/CTA'
import Footer from '../components-v2/Footer'
import Navbar from '../components-v2/Navbar'
import Typography from '../components/Typography'
import {
    plans,
    generalFeatures,
    challengeFeatures,
    communityFeatures,
    advancedFeatures,
    supportFeatures
} from '../data-v2/pricing'

type PlanType = {
    title: string
    description: string
    price: number
    icon: string
}

const PlanCard = ({ title, description, price, icon }: PlanType): React.ReactElement => {
    return (
        <div className='relative'>
            <img src={icon} className='lg:absolute lg:-top-[245px]' />
            <Typography variant='h6' className='mb-3'>
                {title}
            </Typography>
            <Typography variant='sm' className='mb-8'>
                {description}
            </Typography>
            <Typography variant='h3' className='mb-10'>
                {`$${String(price)}`}
                <Typography variant='sm' className='inline'>
                    /mo
                </Typography>
            </Typography>
            <Button link='/' size='lg'>
                <Typography variant='base' className='text-lg font-nuform font-semibold'>
                    Try it for free
                </Typography>
            </Button>
        </div>
    )
}

const FeatureHeading = ({ heading }: { heading: string }): React.ReactElement => {
    return (
        <tr className='border-b border-gray-300'>
            <th className='text-left pt-20 pb-6' colSpan={4} scope='colgroup'>
                <Typography variant='h6' className='text-left'>
                    {heading}
                </Typography>
            </th>
        </tr>
    )
}

const FeatureRow = ({
    index,
    featureGroup,
    feature
}: {
    index: number
    featureGroup: { [feature: string]: boolean[] }
    feature: string
}): React.ReactElement => {
    const isOdd = index % 2

    return (
        <tr className={`${isOdd ? 'bg-off-white-300' : null}`}>
            <th className='p-2 md:p-6'>
                <Typography className='text-xs md:text-base text-left'>{feature}</Typography>
            </th>
            {featureGroup[feature].map((data: boolean, index) => (
                <td key={index}>{data && <img src='/images/icons/tick.svg' className='w-4 h-4 m-auto' />}</td>
            ))}
        </tr>
    )
}

const Pricing: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className='bg-off-white-200 w-full'>
                <section>
                    <div className='bg-turquoise border-b border-b-black'>
                        <div className='max-w-screen-xl relative flex flex-col lg:flex-row lg:justify-between items-center py-24 lg:py-40 px-8 mx-auto'>
                            <Typography variant='h1' className='text-left'>
                                Pick the perfect plan
                            </Typography>
                            <div className='absolute lg:relative -bottom-[50px] lg:-bottom-[25px]'>
                                <div className='flex items-center justify-between bg-white w-52 h-12 py-3 pl-5 pr-2 border border-black rounded-full'>
                                    <Typography variant='sm'>Monthly</Typography>
                                    <Typography className='bg-pink py-1 px-3 rounded-full' variant='sm'>
                                        Annually
                                    </Typography>
                                </div>
                                <Typography className='text-center text-black opacity-50 pt-2.5' variant='xs'>
                                    Save with annual plans
                                </Typography>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pt-20 pb-10 px-8 2xl:px-0'>
                    <div className='w-full max-w-screen-xl lg:my-10 lg:px-8 xl:mx-auto lg:justify-center space-y-16 items-center'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-32'>
                            {plans.map((plan) => (
                                <PlanCard
                                    key={plan.title}
                                    title={plan.title}
                                    description={plan.description}
                                    price={plan.price}
                                    icon={plan.icon}
                                />
                            ))}
                        </div>
                        <div className='w-full h-[500px] bg-off-white-100 p-8 rounded-lg'>
                            <div className='flex flex-1 h-full'>
                                <div className='flex flex-col justify-end lg:justify-between items-center lg:items-baseline px-2 lg:p-3'>
                                    <div className='lg:w-[340px] text-center lg:text-left mb-8'>
                                        <Typography variant='h4' className='mb-4'>
                                            Done for you
                                        </Typography>
                                        <Typography>
                                            You bring your content and vision, we take care of the rest
                                        </Typography>
                                    </div>
                                    <Button link='/' size='lg'>
                                        <Typography variant='base' className='text-lg font-nuform font-semibold'>
                                            Contact us
                                        </Typography>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr className='border-b border-black'>
                                    <td className='py-2 md:py-6'>
                                        <Typography
                                            variant='base'
                                            as='h6'
                                            className='font-nuform md:text-2xl font-semibold text-gray-300'>
                                            Features
                                        </Typography>
                                    </td>
                                    {plans.map((plan) => (
                                        <th key={plan.title} scope='col'>
                                            <Typography
                                                variant='base'
                                                as='h6'
                                                className='font-nuform md:text-2xl font-semibold'>
                                                {plan.title}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <FeatureHeading heading='General' />
                                {Object.keys(generalFeatures).map((feature: string, index: number) => (
                                    <FeatureRow
                                        key={feature}
                                        index={index}
                                        featureGroup={generalFeatures}
                                        feature={feature}
                                    />
                                ))}
                                <FeatureHeading heading='Challenges' />
                                {Object.keys(challengeFeatures).map((feature: string, index: number) => (
                                    <FeatureRow
                                        key={feature}
                                        index={index}
                                        featureGroup={challengeFeatures}
                                        feature={feature}
                                    />
                                ))}
                                <FeatureHeading heading='Community' />
                                {Object.keys(communityFeatures).map((feature: string, index: number) => (
                                    <FeatureRow
                                        key={feature}
                                        index={index}
                                        featureGroup={communityFeatures}
                                        feature={feature}
                                    />
                                ))}
                                <FeatureHeading heading='Advanced' />
                                {Object.keys(advancedFeatures).map((feature: string, index: number) => (
                                    <FeatureRow
                                        key={feature}
                                        index={index}
                                        featureGroup={advancedFeatures}
                                        feature={feature}
                                    />
                                ))}
                                <FeatureHeading heading='Support' />
                                {Object.keys(supportFeatures).map((feature: string, index: number) => (
                                    <FeatureRow
                                        key={feature}
                                        index={index}
                                        featureGroup={supportFeatures}
                                        feature={feature}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <div className='flex flex-col lg:flex-row items-center'>
                            <img src='images/info.svg' className='' />
                            <Typography variant='xs' className='mt-3 lg:ml-3 lg:mt-0'>
                                Payment processing fees vary depending on plan and method of payment. In-app and
                                external payment processing are supported. In-app payment processing fees are 5% on
                                Professional and Business plans.
                            </Typography>
                        </div>
                    </div>
                    <CTA />
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Pricing
