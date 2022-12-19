import React from 'react'
import Typography from '../../components/Typography'

const AdditionalFeatures = (): React.ReactElement => (
    <section className='flex items-center space-x-4'>
        <div className='border border-gray-300 px-4 py-2 rounded-xxl'>
            <Typography variant='lg' className='text-center font-bold'>
                Complete data ownership
            </Typography>
        </div>
        <div className='border border-gray-300 px-4 py-2 rounded-xxl'>
            <Typography variant='lg' className='text-center font-bold'>
                Brand customization
            </Typography>
        </div>
        <div className='border border-gray-300 px-4 py-2 rounded-xxl'>
            <Typography variant='lg' className='text-center font-bold'>
                HIPPA Compliance
            </Typography>
        </div>
    </section>
)

export default AdditionalFeatures
