import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { PostOrPage } from '@tryghost/content-api'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'
import Typography from '../components/Typography'
import { getFAQ } from '../utils/posts'

const FAQ: NextPage = () => {
    const [questions, setQuestions] = useState<void | PostOrPage[]>([])
    const retreivePosts = async () => {
        console.log(await getFAQ())
        setQuestions(await getFAQ())
    }
    useEffect(() => {
        retreivePosts()
    }, [])
    return (
        <>
            <Navbar />
            <main>
                <section className='mt-40 flex flex-col mb-10 max-w-screen-lg mx-10 xl:mx-auto'>
                    <Typography variant='h2' className='flex-1 flex-grow-0 text-center mx-auto mb-20'>
                        Frequently Asked Questions
                    </Typography>
                    {questions!.map(({ title, html }) => (
                        <Accordion key={title} title={title!}>
                            <div dangerouslySetInnerHTML={{ __html: html! }} />
                        </Accordion>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default FAQ
