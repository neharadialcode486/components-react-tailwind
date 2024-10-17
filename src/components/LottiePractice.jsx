import React from 'react'
import lottieJson from '../assets/lottie/tokenomics.json'
import Lottie from 'react-lottie-player'

const LottiePractice = () => {
    return (
        <div className='bg-black py-12'>
            <Lottie className='w-[75%] mx-auto'
                loop
                animationData={lottieJson}
                play
            />
        </div>
    )
}

export default LottiePractice