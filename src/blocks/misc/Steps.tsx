import React from 'react'
import Typography from '../../components/Typography'

const StepsDivider = ({ index, stem = true }: { index: number; stem?: boolean }): React.ReactElement => (
    <div className='w-full relative flex flex-col items-center justify-center gap-2'>
        {stem && <div className='h-20 w-1 border-l border-l-gray-200' />}
        <div className='w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center'>
            <Typography variant='h6' color='text-alpha-black'>
                0{index}
            </Typography>
        </div>
    </div>
)

const Steps = (): React.ReactElement => {
    return (
        <section>
            <div className='flex flex-col gap-8 items-center justify-center relative mb-20'>
                <div className='max-w-lg mx-10 md:mx-auto flex flex-col gap-8 items-center justify-center'>
                    <StepsDivider index={1} stem={false} />
                    <Typography variant='h4' className='text-center max-w-lg mx-auto'>
                        We transform your content into a challenge
                    </Typography>
                    <Typography
                        variant='xl'
                        className='font-bold text-center max-w-lg mx-auto'
                        color='text-primary-900'>
                        Day 1 - Day 14
                    </Typography>
                    <Typography variant='xl' className='text-center'>
                        You provide access to all content (videos, documents, discussion prompts, etc.). We build your
                        first challenge experience
                    </Typography>
                </div>
                <div className='max-w-lg mx-10 md:mx-auto flex flex-col gap-8 items-center justify-center'>
                    <StepsDivider index={2} />
                    <Typography variant='h4' className='text-center max-w-lg mx-auto'>
                        We setup your community
                    </Typography>
                    <Typography
                        variant='xl'
                        className='font-bold text-center max-w-lg mx-auto'
                        color='text-primary-900'>
                        Day 15 - Day 23
                    </Typography>
                    <Typography variant='xl' className='text-center'>
                        You share goals for your community. We set up your community to best meet those goals
                    </Typography>
                </div>
                <div className='max-w-lg mx-10 md:mx-auto flex flex-col gap-8 items-center justify-center'>
                    <StepsDivider index={3} />
                    <Typography variant='h4' className='text-center max-w-lg mx-auto'>
                        We help you launch & promote your challenge
                    </Typography>
                    <Typography
                        variant='xl'
                        className='font-bold text-center max-w-lg mx-auto'
                        color='text-primary-900'>
                        Day 24 – Day 30
                    </Typography>
                    <Typography variant='xl' className='text-center'>
                        We help you promote and launch your challenge, leveraging lessons and best practices from
                        250,000+ challenge starts.
                    </Typography>
                </div>
            </div>
        </section>
    )
}

export default Steps
