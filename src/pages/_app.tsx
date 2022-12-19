import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import { SHARED_DATA } from '../data/common'
import { loadIntercom } from 'next-intercom'

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props
    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('init GTM')
            TagManager.initialize({ gtmId: 'AW-323414266' })
            loadIntercom({ appId: 'oi2s53rc' })
        } else {
            console.log('GTM server side - ignorning')
        }

        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('476793727144905') // facebookPixelId
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    }, [router.events])

    return (
        <>
            <Head>
                {/* https://nextjs.org/docs/api-reference/next/head
        To avoid duplicate tags in your head you can use the key property,
        which will make sure the tag is only rendered once, as in the following example: */}
                <title>Framework</title>
                <meta name='title' content={SHARED_DATA.SITE_TITLE} key='title' />
                <meta name='description' content={SHARED_DATA.SITE_DESCRIPTION} key='description' />

                {/* Open Graph */}
                <meta property='og:type' content='website' key='ogtype' />
                <meta property='og:url' content={SHARED_DATA.CURRENT_URL} key='ogurl' />
                <meta property='og:title' content={SHARED_DATA.SITE_TITLE} key='ogtitle' />
                <meta property='og:description' content={SHARED_DATA.SITE_DESCRIPTION} key='ogdesc' />
                <meta property='og:image' content={SHARED_DATA.SITE_IMAGE} key='ogimage' />
                <meta property='og:site_name' content={SHARED_DATA.SITE_NAME} key='ogsitename' />

                {/* Twitter */}
                <meta property='twitter:card' content='summary_large_image' key='twcard' />
                <meta property='twitter:url' content={SHARED_DATA.CURRENT_URL} key='twurl' />
                <meta property='twitter:title' content={SHARED_DATA.SITE_TITLE} key='twtitle' />
                <meta property='twitter:description' content={SHARED_DATA.SITE_DESCRIPTION} key='twdesc' />
                <meta property='twitter:image' content={SHARED_DATA.SITE_IMAGE} key='twimage' />
                {/* <meta name='twitter:creator' content={twitterHandle} key='twhandle' /> */}

                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
                />
                <meta name='facebook-domain-verification' content='u66j215joy7crdm0anshdcx68wrzwn' />
            </Head>

            <Component {...pageProps} />
        </>
    )
}
