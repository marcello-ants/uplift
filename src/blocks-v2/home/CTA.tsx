import React from 'react'
import CTACard from '../../blocks/shared/CTACard'
import Button from '../../components-v2/Button'
import { SHARED_DATA } from '../../data/common'
import Typography from '../../components/Typography'

const CTA = (): React.ReactElement => (
    <div className='max-w-screen-xl mx-auto flex py-28 px-8 w-full'>
        <Button link={SHARED_DATA.DEFAULT_TRIAL_LINK} size='cta' className='bg-turquoise'>
            <Typography variant='h3'>Try it for free</Typography>
        </Button>
    </div>
)

export default CTA
