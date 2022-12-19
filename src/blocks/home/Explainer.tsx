import React, { useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import classnames from 'classnames'
import Typography from '../../components/Typography'
import { cards } from '../../data/challenge-cards'

gsap.registerPlugin(ScrollTrigger)

type Waypoint = {
    title?: string
    description: string
    icon: string
    gradient: string
    celebrate?: boolean
    start?: boolean
}

type Card = {
    title: string
    description: string
    waypoints: Waypoint[]
}

/**
 * Radial gradient effect for waypoint
 */
const WayPointRadial = ({ color }: { color: string }): React.ReactElement => {
    let gradientStart = ''

    switch (color) {
        case 'yellow':
            gradientStart = 'rgba(255, 238, 194, 255)'
            break
        case 'orange':
            gradientStart = 'rgba(255, 219, 178, 255)'
            break
        case 'red':
            gradientStart = 'rgba(255, 209, 209, 255)'
            break
    }

    return (
        <div
            className='hidden lg:block path-waypoint-gradient w-20 h-20 rounded-full absolute left-2/4 transform -translate-x-2/4 blur-lg '
            style={{
                backgroundImage: `radial-gradient(
                    ${gradientStart} 0%,
                    rgba(243, 231, 255, 0) 100%
                )`
            }}
        />
    )
}

/**
 * Responsive path for waypoint
 */
const WaypointPath = ({ index, total }: { index: number; total: number }): React.ReactElement => {
    switch (index) {
        case 0:
            return (
                <div className='path-timeline absolute left-2/4 bottom-unset lg:right-0 top-2/4 transform lg:-translate-y-2/4 border-dashed border-l border-l-gray-300 lg:border-l-0 lg:border-b lg:border-b-gray-300 height-auto h-2/4 lg:h-0' />
            )
        case total - 1: // Append swirly thing here
            return (
                <div className='path-timeline absolute left-2/4 lg:left-0 bottom-unset lg:right-2/4 top-0 lg:top-2/4 transform lg:-translate-y-2/4 border-dashed border-l border-l-gray-300 lg:border-l-0 lg:border-b lg:border-b-gray-300 height-auto h-2/4 lg:h-0' />
            )
        default:
            return (
                <div className='path-timeline absolute left-2/4 lg:left-0 bottom-unset lg:right-0 top-0 lg:top-2/4 transform lg:-translate-y-2/4 border-dashed border-l border-l-gray-300 lg:border-l-0 lg:border-b lg:border-b-gray-300 height-auto h-full lg:h-0' />
            )
    }
}

/**
 * Waypoint
 */
const WaypointCard = ({
    waypoint,
    isBottom,
    highlightTitle
}: {
    waypoint: Waypoint
    isBottom: boolean
    highlightTitle?: boolean
}): React.ReactElement => {
    const cardClasses = classnames(
        'path-waypoint w-36 h-[80px] bg-white p-2 rounded-lg drop-shadow-md border flex flex-col items-center space-y-0.5 transform justify-center',
        {
            'lg:-translate-y-[65px] ': !isBottom,
            'lg:translate-y-[64px] ': isBottom
        }
    )

    const stemClasses = classnames(
        'hidden lg:block w-[2px] bg-primary-900 h-[25px] absolute bottom-0 left-2/4 transform -translate-x-2/4 translate-y-full',
        {
            'bottom-0 translate-y-full': !isBottom,
            'top-0 -translate-y-full': isBottom
        }
    )

    const dotClasses = classnames('w-3 h-3 rounded-full bg-primary-900 absolute left-2/4 transform -translate-x-2/4', {
        'bottom-0 translate-y-1/2': !isBottom,
        'top-0 -translate-y-1/2': isBottom
    })

    return (
        <div className='relative'>
            <WayPointRadial color={waypoint.gradient} />
            {waypoint.celebrate && <div className='-mt-20 lg:mt-auto' />}
            <div className={cardClasses}>
                {waypoint.start && (
                    <div className='flex flex-col space-y-2 absolute -top-20 lg:top-36'>
                        <Typography
                            variant='sm'
                            color='text-alpha-black'
                            className='whitespace-nowrap text-center font-bold'>
                            Your Audience
                        </Typography>
                        <div className='flex flex-row space-x-2'>
                            <Typography variant='xs' color='text-alpha-black' className='whitespace-nowrap'>
                                Mailing list
                            </Typography>
                            <Typography variant='xs' color='text-alpha-black' className='whitespace-nowrap'>
                                Instagram
                            </Typography>
                            <Typography variant='xs' color='text-alpha-black' className='whitespace-nowrap'>
                                Blog
                            </Typography>
                            <Typography variant='xs' color='text-alpha-black' className='whitespace-nowrap'>
                                YouTube
                            </Typography>
                        </div>
                    </div>
                )}
                {waypoint.celebrate && (
                    <>
                        <img
                            src='/images/confetti.svg'
                            className='path-waypoint-celebrate w-[140px] absolute top-0 tranform -translate-y-1/4'
                        />
                        <div className='flex flex-col space-y-2 absolute top-28 lg:top-36'>
                            <Typography
                                variant='sm'
                                color='text-alpha-black'
                                className='whitespace-nowrap text-center font-bold'>
                                Your Engaged Audience
                            </Typography>
                            <div className='flex flex-row space-x-2'>
                                <Typography variant='xs' color='text-alpha-black' className='whitespace-nowrap'>
                                    1:1 Coaching
                                </Typography>
                                <Typography variant='xs' color='text-alpha-black' className='whitespace-nowrap'>
                                    Membership Community
                                </Typography>
                                <Typography variant='xs' color='text-alpha-black' className='whitespace-nowrap'>
                                    Premium Course
                                </Typography>
                            </div>
                        </div>
                    </>
                )}
                <img src={waypoint.icon} className='h-5 w-auto' />
                {waypoint.title && (
                    <Typography
                        variant='xs'
                        className='font-bold text-center'
                        color={highlightTitle ? 'text-primary-900' : ''}>
                        {waypoint.title}
                    </Typography>
                )}
                <Typography variant='sm' className='font-bold text-center'>
                    {waypoint.description}
                </Typography>
                <div className={stemClasses}>
                    <div className={dotClasses} />
                </div>
            </div>
        </div>
    )
}

const Explainer = ({ padNav = true }: { padNav?: boolean }): React.ReactElement => {
    // useEffect(() => {
    //     /*
    //      * Important classes
    //      *
    //      * .path-card               - The *entire* parent card, including intro text
    //      * .path-waypoint           - The "card" including the stem
    //      * .path-waypoint-celebrate - Let's party!
    //      * .path-timeline           - The dashed line
    //      */
    //     const trigger = '.path-scroll'
    //     const toggleActions = 'play none none none'
    //     const pathCards = gsap.utils.toArray('.path-card')

    //     ScrollTrigger.matchMedia({
    //         '(min-width: 769px)': () => {
    //             pathCards.forEach((pathCard: any, i) => {
    //                 const tl = gsap.timeline({
    //                     scrollTrigger: {
    //                         trigger,
    //                         toggleActions,
    //                         invalidateOnRefresh: true
    //                     }
    //                 })

    //                 const pathWaypointCelebrate = pathCard.querySelectorAll('.path-waypoint-celebrate')
    //                 const pathTimeline = pathCard.querySelectorAll('.path-timeline')
    //                 const pathWaypoint = pathCard.querySelectorAll('.path-waypoint')

    //                 tl.from(pathCard, { opacity: 0.2 })
    //                     .from(pathTimeline, { width: 0 })
    //                     .from(pathWaypoint, { opacity: 0, scale: 0 })

    //                 tl.to(pathCard, { opacity: 1, duration: 0.2, delay: i * 0.1 })
    //                     .to(pathTimeline, { width: 'auto', duration: 0.2, delay: i * 0.1 })
    //                     .to(pathWaypoint, { opacity: 1, scale: 1, duration: 0.2, delay: i * 0.1 })
    //                     .to(pathWaypointCelebrate, { opacity: 1, scale: 1, duration: 0.2, delay: i * 0.1 })
    //             })

    //             ScrollTrigger.create({
    //                 trigger,
    //                 scrub: false,
    //                 once: true,
    //                 start: () => 'top center',
    //                 invalidateOnRefresh: true
    //             })
    //         }
    //     })
    // }, [])

    return (
        <section
            id='challenge'
            style={
                padNav
                    ? {
                          paddingTop: '100px',
                          marginTop: '0px'
                      }
                    : {}
            }>
            <div className='flex flex-col max-w-screen-xl px-8 xl:mx-auto space-y-10 items-center justify-center lg:overflow-hidden relative'>
                <div className='space-y-4 w-full'>
                    <Typography variant='h3' className='flex-1 flex-grow-0 text-start mx-auto lg:text-center'>
                        What is a challenge?
                    </Typography>
                    <Typography variant='xl' className='text-start mx-auto mb-6 lg:text-center'>
                        Challenges are a scientifically proven way for you to engage your audience and multiply your
                        impact.
                    </Typography>
                    <Link href='/challenge'>
                        <Typography
                            variant='lg'
                            className='text-start font-bold cursor-pointer hover:underline lg:text-center'
                            color='text-primary-900'>
                            Learn more about challenges →
                        </Typography>
                    </Link>
                </div>
                <div className='path-scroll flex flex-col lg:flex-row space-y-4 items-center lg:space-y-0 lg:space-x-4 w-full'>
                    {cards.map((card: Card, cardIndex: number) => (
                        <div
                            key={card.title}
                            className='path-card flex-1 max-w-md bg-gray-100 rounded-2xl overflow-visible'>
                            <div className='p-10 pb-0 mb-4 lg:mb-0'>
                                <Typography variant='h6' className='text-start mb-2'>
                                    {card.title}
                                </Typography>
                                <Typography variant='base' className='text-start'>
                                    {card.description}
                                </Typography>
                            </div>
                            <div className='h-[250px] flex flex-col lg:flex-row items-center justify-center lg:justify-evenly relative space-y-4 lg:space-y-0 lg:space-x-0'>
                                {/* <div className='graydient' /> */}
                                <WaypointPath index={cardIndex} total={cards.length} />
                                {card.waypoints.map((waypoint, index) => (
                                    <WaypointCard
                                        key={waypoint.description}
                                        waypoint={waypoint}
                                        isBottom={index % 2 !== 0}
                                        highlightTitle={cardIndex === 1}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Explainer
