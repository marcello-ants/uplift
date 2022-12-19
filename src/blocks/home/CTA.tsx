import React from 'react'
import CTACard from '../../blocks/shared/CTACard'
import { SHARED_DATA } from '../../data/common'

const CTA = (): React.ReactElement => (
    <CTACard
        header='See what challenges can do for your business'
        subheader='Free for 14 Days'
        detail='Get started with a 14 day free trial.'
        buttonText='Start free trial'
        buttonLink={SHARED_DATA.DEFAULT_TRIAL_LINK}
        buttonVariant='primary'
    />
)

export default CTA
