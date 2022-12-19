import React, { useState } from 'react'
import Typography from '../../components/Typography'
import { steps } from '../../data-v2/steps'

const Triangle = (): React.ReactElement => {
    return (
        <div
            className='absolute -left-4 top-3.5 border border-transparent border-transparent border-l-orange'
            style={{ borderWidth: '7px 0 7px 12.1px' }}
        />
    )
}

const CycleSteps = ({
    index,
    title,
    description,
    selectedStep
}: {
    index: number
    title: string
    description: string
    selectedStep: number
}): React.ReactElement => {
    const isSelected = selectedStep === index - 1
    const isLast = index === 3

    return (
        <div className='relative flex flex-row items-start justify-start content-start h-full w-full'>
            <div className='-mr-6'>{isSelected && <Triangle />}</div>
            <div className='flex-1 challenge-image flex flex-col lg:flex-row space-y-4 pl-8 py-7'>
                <div
                    className={`w-full challenge-image-description space-y-4 -mt-[22px] pb-5 ${
                        !isLast ? 'border-b border-b-black' : null
                    }`}>
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

const Steps = (): React.ReactElement => {
    const [selectedStep, setSelectedStep] = useState(0)

    return (
        <section>
            <div className='flex flex-col max-w-screen-xl lg:my-10 lg:px-8 xl:mx-auto lg:justify-center space-y-16 items-center lg:overflow-hidden relative'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-20 pb-10 lg:gap-14 lg:py-12 justify-center'>
                    <div className='col-span-6 px-8'>
                        <div className='transform lg:translate-y-10 flex flex-col mb-20'>
                            <Typography variant='h3' className='text-left'>
                                The vicious cycle of teaching online so far.
                            </Typography>
                        </div>
                        <div className='col-span-1 challenge-steps relative w-full flex items-center flex-col'>
                            {steps.map((step, stepIndex) => (
                                <div
                                    key={stepIndex}
                                    className='w-full cursor-pointer'
                                    onClick={() => setSelectedStep(stepIndex)}>
                                    <CycleSteps
                                        key={step.title}
                                        index={stepIndex + 1}
                                        selectedStep={selectedStep}
                                        {...step}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
