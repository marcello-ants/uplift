import React from 'react'

/**
 * Container used to scope styles and inject HTML for posts
 */
const StyledPostBox = ({ html }: { html: string }): React.ReactElement => (
    <div className='ghost-post' dangerouslySetInnerHTML={{ __html: html }}></div>
)

export default StyledPostBox
