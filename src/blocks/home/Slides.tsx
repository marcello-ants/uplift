import React, { useState } from 'react'
import Typography from '../../components/Typography'
import { steps } from '../../data/challenge-steps'

const BigNumber = ({ index, isSelected }: { index: number; isSelected: boolean }): React.ReactElement => (
    <div
        className={`relative w-10 h-10 border ${
            isSelected ? 'border-primary-900 bg-primary-900' : 'border-gray-300 bg-white'
        } rounded-full flex items-center justify-center mr-0.5`}>
        <Typography variant='xl' className={`${isSelected ? 'text-white' : 'text-black'}`}>
            {index}
        </Typography>
    </div>
)

const ChallengeSteps = ({
    index,
    title,
    description,
    selectedStep
}: {
    index: number
    image: string
    title: string
    description: string
    selectedStep: number
}): React.ReactElement => {
    const isSelected = selectedStep === index - 1
    const isLast = index === 5
    return (
        <div className='flex flex-row items-start justify-start content-start h-full w-full'>
            <div className='-mr-6'>
                <BigNumber index={index} isSelected={isSelected} />
            </div>
            <div
                className={`challenge-image flex flex-col lg:flex-row space-y-4 pl-8 py-7 ${
                    isLast ? null : 'border-l-2'
                }`}>
                <div className='challenge-image-description space-y-4 -mt-[22px]'>
                    <Typography variant='h6' className='font-bold'>
                        {title}
                    </Typography>
                    {isSelected && (
                        <Typography variant='base' color='text-gray-500' className='font-normal '>
                            {description}
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    )
}

const Slides = (): React.ReactElement => {
    const [selectedStep, setSelectedStep] = useState(0)

    return (
        <section>
            <div className='my-20 lg:my-0 challenge-scroll flex flex-col max-w-screen-xl px-8 xl:mx-auto lg:justify-center space-y-16 items-center lg:overflow-hidden relative '>
                <Typography variant='h3' className='flex-1 flex-grow-0 text-center max-w-3xl mx-auto mb-4'>
                    Launch a challenge that helps more people cross the finish line
                </Typography>
                <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                    <div className='col-span-1 challenge-steps relative w-full flex items-center flex-col'>
                        {steps.map((step, stepIndex) => (
                            <div
                                key={stepIndex}
                                className='w-full cursor-pointer'
                                onClick={() => setSelectedStep(stepIndex)}>
                                <ChallengeSteps
                                    key={step.title}
                                    index={stepIndex + 1}
                                    selectedStep={selectedStep}
                                    {...step}
                                />
                            </div>
                        ))}
                    </div>

                    <div className='col-span-1 max-w-full rounded-lg hidden lg:flex'>
                        <div
                            className='bg-cover h-[380px] min-w-[400px] w-full max-w-full rounded-lg shadow-lg border'
                            style={{
                                backgroundImage: `url(${steps[selectedStep].image})`,
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slides
