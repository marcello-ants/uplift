import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

type ArrowProps = {
    left?: boolean
    onClick: (e: any) => void
}

type SliderProps = {
    children?: React.ReactNode
}

const Arrow = ({ left, onClick }: ArrowProps) => {
    return (
        <button className={`absolute w-lg h-lg top-24 ${left ? 'left-5' : 'right-5'}`} onClick={onClick}>
            {left ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    className='fill-off-white-300'>
                    <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
                </svg>
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    className='fill-off-white-300'>
                    <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
                </svg>
            )}
        </button>
    )
}

const Slider = ({ children }: SliderProps) => {
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 1,
        created() {
            setLoaded(true)
        },
        loop: true,
        slides: {
            origin: 'center',
            perView: 2,
            spacing: 20
        },
        breakpoints: {
            '(min-width: 800px)': {
                slides: {
                    origin: 'center',
                    perView: 4,
                    spacing: 20
                }
            },
            '(min-width: 1024px)': {
                slides: {
                    origin: 'center',
                    perView: 5,
                    spacing: 24
                }
            },
            '(min-width: 1280px)': {
                slides: {
                    origin: 'center',
                    perView: 6,
                    spacing: 24
                }
            }
        }
    })

    return (
        <>
            <div className='relative'>
                <ul ref={sliderRef as unknown as React.RefObject<HTMLUListElement>} className='keen-slider'>
                    {React.Children.map(children, (child, i) => {
                        return (
                            <li key={i} className='keen-slider__slide'>
                                {child}
                            </li>
                        )
                    })}
                </ul>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />
                        <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
                    </>
                )}
            </div>
        </>
    )
}

export default Slider
