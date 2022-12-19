import { NextPage } from 'next'
import Challenge from '../blocks/home/Challenge'
import Typography from '../components/Typography'
import Link from 'next/link'
import Head from 'next/head'

const Twitter: NextPage = () => {
    const pageTitle = 'Twitter Accountability'
    const pageURL = `https://framework.so/elon`
    const pageDescription = 'Hold yourself accountable to growing on Twitter'
    const pageImage = 'https://www.framework.so/images/grow_twitter.png'
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel='canonical' href={pageURL} />
                <meta name='title' content={pageTitle} key='title' />
                <meta name='description' content={pageDescription} key='description' />

                {/* Open Graph */}
                <meta property='og:url' content={pageURL} key='ogurl' />
                <meta property='og:title' content={pageTitle} key='ogtitle' />
                <meta property='og:description' content={pageDescription} key='ogdesc' />
                <meta property='og:image' content={pageImage} key='ogimage' />

                {/* Twitter */}
                <meta property='twitter:card' content='summary_large_image' key='twcard' />
                <meta property='twitter:url' content={pageURL} key='twurl' />
                <meta property='twitter:title' content={pageTitle} key='twtitle' />
                <meta property='twitter:description' content={pageDescription} key='twdesc' />
                <meta property='twitter:image' content={pageImage} key='twimage' />
            </Head>
            <main className='bg-off-white-200'>
                <div className='flex flex-col h-screen bg-off-white-200'>
                    <a
                        target='_blank'
                        href='https://twitter.com/TechEmails/status/1575598387335901190'
                        rel='noopener noreferrer'>
                        <div className='flex space-x-3 items-center justify-start p-4'>
                            <img src='/images/elon.png' className='h-[45px] w-[45px]' />
                            <div className='border bg-white p-2 rounded-lg'>
                                <Typography variant='xl' className='font-bold'>
                                    What did you get done this week?
                                </Typography>
                            </div>
                        </div>
                    </a>
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
