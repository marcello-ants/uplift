import React, { useState, useEffect, useMemo, useRef, MutableRefObject } from 'react'
import { useRouter } from 'next/router'
import { PostOrPage } from '@tryghost/content-api'
import Fuse from 'fuse.js'
import Link from 'next/link'
import Typography from '../../components/Typography'

interface Props {
    searchablePosts: PostOrPage[]
    placeholder: string
    isOpen?: boolean
    setOpen: (open: boolean) => void
    path: string
}

export default function SearchModal({ searchablePosts, placeholder, isOpen, setOpen, path }: Props) {
    const router = useRouter()
    const searchRef: MutableRefObject<any> = useRef(null)
    const scrollRef: MutableRefObject<any> = useRef(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [focusResult, setFocusResult] = useState(0)

    const searchIndex = useMemo(
        () =>
            new Fuse(searchablePosts, {
                includeScore: true,
                keys: ['title', 'excerpt']
            }),
        []
    )
    const results = useMemo(() => searchIndex.search(searchQuery), [searchQuery])
    const searchResults = results.map((test) => test.item)

    const handleSearch = (searchQuery: string) => {
        setSearchQuery(searchQuery)
    }

    const handleClose = () => {
        setOpen(false)
        setSearchQuery('')
    }

    useEffect(() => searchRef.current && searchRef.current.focus())

    const handleListKeyDown = (e: any) => {
        switch (e.key) {
            case 'Escape':
                e.preventDefault()
                handleClose()
                break
            case 'ArrowUp':
                if (searchResults.length > 0 && focusResult > 0) {
                    e.preventDefault()
                    setFocusResult(focusResult - 1)
                }
                break
            case 'ArrowDown':
                if (searchResults.length > 0 && focusResult < searchResults.length - 1) {
                    e.preventDefault()
                    setFocusResult(focusResult + 1)
                }
                break
            case 'Enter':
                e.preventDefault()
                router.push(`${path}/${searchResults[focusResult].slug}`)
            default:
                break
        }
    }

    return (
        <div
            id='backdrop'
            className={`fixed justify-center bg-black bg-opacity-40 z-40 top-0 left-0 bottom-0 right-0 transition-all ${
                isOpen ? 'flex' : 'hidden'
            }`}
            onClick={(e) => {
                const target = e.target as Element
                if (target.id === 'backdrop') handleClose()
            }}>
            <div className='bg-white max-h-[50vh] relative mx-4 rounded-lg top-40 flex-col w-full max-w-lg overflow-hidden'>
                <div className='p-3'>
                    <input
                        name='search'
                        placeholder={placeholder}
                        autoFocus
                        autoComplete='off'
                        ref={searchRef}
                        value={searchQuery}
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                        onKeyDown={handleListKeyDown}
                        onChange={(event) => handleSearch(event.target.value)}
                        className='form-control px-4 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded-lg border border-gray-200 shadow outline-none focus:outline-none w-full'
                    />
                </div>
                <div ref={scrollRef} className='py-0 h-full w-full overflow-y-auto overflow-x-hidden'>
                    {searchQuery !== '' ? (
                        searchResults.length > 0 ? (
                            searchResults.map((post, index) => {
                                return (
                                    <Link key={post.title} href={`/post/${post.slug}`}>
                                        <a
                                            className={`py-2 px-4 transition-all flex flex-row space-x-6 overflow-hidden justify-start ${
                                                index === focusResult ? 'bg-gray-200' : 'hover:bg-gray-100'
                                            }`}>
                                            <div
                                                className='w-14 h-14 bg-center bg-cover bg-no-repeat rounded'
                                                style={{
                                                    backgroundImage: `url(${post.feature_image || '/images/logo.png'})`
                                                }}
                                            />
                                            <div className='flex-1 py-1 space-y-1'>
                                                <Typography variant='base' className='font-medium'>
                                                    {post.title}
                                                </Typography>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })
                        ) : (
                            <div className='h-[400px] flex items-center justify-center'>
                                <Typography color='text-gray-500'>No results for "{searchQuery}"</Typography>
                            </div>
                        )
                    ) : (
                        <div className='h-[400px] flex items-center justify-center'>
                            <Typography color='text-gray-500'>Start typing to search</Typography>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
