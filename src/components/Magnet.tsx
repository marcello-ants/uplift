import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import validator from 'validator'
import Typography from './Typography'
import TextField from './TextField'
import Button from './Button'

const Magnet = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<{ [input: string]: boolean }>({})

    const submitForm = async () => {
        setLoading(true)

        const errors: { [input: string]: boolean } = {}
        if (!name) errors.name = true
        if (!validator.isEmail(email)) errors.email = true

        if (Object.keys(errors).length) {
            setErrors(errors)
            setLoading(false)
            return
        }

        await fetch('/api/zoho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        })
            .then(async (response) => {
                setLoading(false)
                const data = await response.json()

                if (data && response.status === 200) {
                    setSubmitted(true)
                } else {
                    alert('We had trouble processing your request. Please try again later.')
                }
            })
            .catch(() => {
                setLoading(false)
                alert('We had trouble processing your request. Please try again later.')
            })
    }

    return (
        <div className='items-center justify-center'>
            <div className='border bg-gray-100 rounded-lg p-6 w-full max-w-xxl lg:max-w-screen-xl flex flex-col items-center justify-center lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8'>
                <div className='flex-1'>
                    <Typography variant='h6' className='max-w-sm text-center lg:text-left'>
                        Enter your email to receive our free Challenge Toolkit
                    </Typography>
                </div>
                <div className='flex-1 w-full flex flex-col items-center justify-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
                    <SwitchTransition>
                        <CSSTransition
                            key={submitted ? 'submitted' : 'not submitted'}
                            addEndListener={(node: any, done: any) =>
                                node.addEventListener('transitionend', done, false)
                            }
                            classNames='fade'>
                            {!submitted ? (
                                <>
                                    <TextField
                                        className={`flex-1 w-full bg-white  ${
                                            errors.name ? 'border border-primary-900 ' : ''
                                        }`}
                                        placeholder='Your name'
                                        id={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={loading}
                                        value={name}
                                    />
                                    <TextField
                                        className={`flex-1 w-full bg-white ${
                                            errors.email ? 'border border-primary-900' : ''
                                        }`}
                                        placeholder='Email address'
                                        id='email'
                                        disabled={loading}
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                    <Button link='#' size='lg' onClick={submitForm} disabled={loading}>
                                        Submit
                                    </Button>
                                </>
                            ) : (
                                <Typography variant='base' className='max-w-sm text-center'>
                                    All set! Check your email shortly.
                                </Typography>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </div>
    )
}

export default Magnet
