import { NextPage } from 'next'
import Script from 'next/script'
import Navbar from '../components-v2/Navbar'
import Hero from '../blocks-v2/home/Hero'
import Email from '../blocks-v2/home/Email'
import Features from '../blocks-v2/home/Features'
import Slides from '../blocks-v2/home/Slides'
import Steps from '../blocks-v2/home/Steps'
import CTA from '../blocks-v2/home/CTA'
import Footer from '../components-v2/Footer'

const TrackingTags = () => (
    <>
        <Script
            id='leaddyno'
            src='https://static.leaddyno.com/js'
            strategy='afterInteractive'
            onLoad={() => {
                ;(window as any).LeadDyno.key = 'b82e7c6f73c0e5bb8fd2d86436c0a087b7cbe663'
                ;(window as any).LeadDyno.recordVisit()
            }}
        />
        <Script src='https://www.googletagmanager.com/gtag/js?id=AW-323414266' strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-323414266'); gtag('config', 'G-J6J0Y4HMVN'); gtag('config', 'G-E2W9DYH93B');`}
        </Script>
        <Script
            id='hotjar-script'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
                __html: `
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:2925368,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `
            }}
        />
    </>
)

const Home: NextPage = () => {
    return (
        <>
            <TrackingTags />
            <Navbar />
            <main className='bg-off-white-200'>
                <div className='flex flex-col'>
                    <div className='flex flex-col space-y-28'>
                        <Hero
                            headerText='Bring your online course to life'
                            subheaderText='Framework is the home for the world’s best teachers and most engaged learners.'
                        />
                        <div className='flex flex-col space-y-0 lg:space-y-36'>
                            <Steps />
                            <Email />
                            <Features />
                            <Slides />
                            <CTA />
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Home
