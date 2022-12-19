import { NextPage } from 'next'
import Challenge from '../blocks/home/Challenge'
import Typography from '../components/Typography'
import Link from 'next/link'

const Twitter: NextPage = () => {
    return (
        <>
            <main className='bg-off-white-200'>
                <div className='flex flex-col h-screen bg-off-white-200'>
                    <div className='grow bg-off-white-200'>
                        <Challenge headerText='Hold Yourself Accountable to' subheaderText='Growing on Twitter' />
                    </div>
                    <div className='py-6 bg-off-white-200'>
                        <Typography variant='lg' as='h2' className='font-normal text-center'>
                            Powered by <Link href={`/`}>Framework</Link>
                        </Typography>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Twitter
