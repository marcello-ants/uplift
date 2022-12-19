import { NextPage } from 'next'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hero from '../blocks/home/Hero'
import Explainer from '../blocks/home/Explainer'
import Slides from '../blocks/home/Slides'
import Features from '../blocks/home/Features'
import CTA from '../blocks/home/CTA'
import Collage from '../blocks/home/Collage'
import Testimonials from '../blocks/home/Testimonials'
import Footer from '../components/Footer'

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
            <Banner />
            <main>
                <div className='flex flex-col'>
                    <div className='flex flex-col space-y-28 pb-28'>
                        <Hero
                            headerText='Grow your business with a challenge'
                            subheaderText='Harness the power of challenges to
                            grow your business and drive tangible outcomes for your customers.'
                        />
                        <Explainer />
                        <div className='flex flex-col space-y-28 py-20 g-no-repeat bg-gray-100'>
                            <Collage />
                        </div>
                        <div className='flex flex-col space-y-36'>
                            <Slides />
                            <Features />
                            <Testimonials />
                        </div>
                    </div>
                    <CTA />
                    <Footer />
                    {/* <AdditionalFeatures /> */}
                </div>
            </main>
        </>
    )
}

export default Home
