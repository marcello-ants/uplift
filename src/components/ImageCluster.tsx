import React from 'react'

/**
 * Cluster of images
 */
const ImageCluster = ({ images }: { images: string[] }): React.ReactElement => (
    <>
        <div
            style={{ backgroundImage: `url(${images[0]})` }}
            className='image-cluster-image rounded-xl w-[160px] h-[300px] bg-cover bg-center hidden lg:flex'
        />
        <div className='flex-col space-y-8 hidden xl:flex'>
            <div
                style={{ backgroundImage: `url(${images[1]})` }}
                className='image-cluster-image rounded-xl w-[96px] h-[200px] bg-cover bg-center'
            />
            <div
                style={{ backgroundImage: `url(${images[2]})` }}
                className='image-cluster-image rounded-xl w-[96px] h-[200px] bg-cover bg-center'
            />
        </div>
        <div
            style={{ backgroundImage: `url(${images[3]})` }}
            className='image-cluster-image rounded-xl w-[160px] h-[300px] bg-cover bg-center hidden 2xl:flex'
        />
    </>
)

export default ImageCluster
