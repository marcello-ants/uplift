import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'
import Typography from '../components/Typography'
import { docsLinks } from '../data/docs'
import groupBy from 'lodash/groupBy'
import { IoIosArrowDown } from 'react-icons/io'
import { HomeIcon, RepoIcon, SearchIcon } from '@primer/octicons-react'

/**
 * A single link in the sidebar
 */
const SidebarItem = ({ label, link }: { label: string; link: string }): React.ReactElement => {
    const router = useRouter()

    const classes = classnames('text-md px-11 py-1.5 font-normal transition-all block', {
        'bg-primary-900 text-white hover:text-white':
            router.asPath === `/docs/${link}` || (router.asPath === '/docs' && link === ''),
        'hover:text-primary-900': router.asPath !== `/docs/${link}` || (router.asPath === '/docs' && link !== '')
    })

    return (
        <Link href={`/docs/${link}`}>
            <a className={classes}>{label}</a>
        </Link>
    )
}

/**
 * A single link in the sidebar with icon
 */
const SidebarIconItem = ({
    label,
    link,
    icon
}: {
    label: string
    link: string
    icon: JSX.Element
}): React.ReactElement => {
    const router = useRouter()

    const classes = classnames(
        'cursor-pointer text-md px-5 space-x-2 py-2 font-bold hover:bg-primary-900 hover:text-white transition-all block',
        {
            'bg-primary-900 text-white': router.asPath === `/docs/${link}` || (router.asPath === '/docs' && link === '')
        }
    )

    return (
        <Link href={`/docs/${link}`}>
            <div className={classes}>
                {icon}
                <a>{label}</a>
            </div>
        </Link>
    )
}

/**
 * An expanding section in the sidebar
 */
const DocsSidebarExpandable = ({
    title,
    icon,
    links
}: {
    title: string
    icon: JSX.Element
    links: { section: string; name: string; slug: string }[]
}): React.ReactElement => {
    const [expanded, setExpanded] = useState(true)

    const sections = groupBy(links, (post: any) => post.section)

    const contentClasses = classnames('transition-all overflow-hidden', {
        'max-h-0 opacity-0 mb-0': !expanded,
        'max-h-96 opacity-100 mb-0': expanded
    })

    const expandArrowClasses = classnames('transform transition-all', {
        '-rotate-90': !expanded,
        'rotate-0': expanded
    })

    return (
        <div>
            <div
                role='button'
                onClick={() => setExpanded(!expanded)}
                className='flex px-5 space-x-2 py-2 text-sm text-black font-bold mb-2 relative items-center'>
                {icon}
                <Typography variant='base' color='text-black'>
                    {title}
                </Typography>
            </div>
            {Object.keys(sections).map((section) => (
                <div key={section} className={contentClasses}>
                    <div className='text-md text-black font-bold mb-2'>
                        <Typography variant='xs' color='text-gray-400 px-11 py-2 uppercase font-medium'>
                            {section}
                        </Typography>
                        <ul>
                            {sections[section].map((post) => (
                                <li key={post.slug}>
                                    <SidebarItem label={post.name} link={post.slug} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

/**
 * Fixed sidebar for the docs
 */
const DocsSidebar = ({ mobileOpen }: { mobileOpen: boolean }): React.ReactElement => {
    const sidebarClasses = classnames(
        'fixed bg-white bottom-0 left-0 py-6 border-r border-r-gray-200 overflow-scroll top-[85px] w-[284px] transform transition-all z-10',
        {
            '-translate-x-full lg:translate-x-0': !mobileOpen
        }
    )

    return (
        <nav className={sidebarClasses}>
            <div className=''>
                <SidebarIconItem label='Home' link='' icon={<HomeIcon />} />
            </div>
            {docsLinks.map((section, i) => (
                <DocsSidebarExpandable
                    key={section.title}
                    title={section.title}
                    icon={i === 0 ? <RepoIcon /> : <SearchIcon />}
                    links={section.links}
                />
            ))}
        </nav>
    )
}

export default DocsSidebar
