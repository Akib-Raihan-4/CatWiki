import React from 'react'

export const OtherPhoto = ({catInfos}) => {
    const images = []

    for(let i = 1; i< catInfos.length; i++){
        images.push(
            <img src={catInfos[i].url} key={i} className="sm:w-[345px] w-[190px] sm:h-[278px] h-[190px] object-cover rounded-[25px] shadow-[10px_10px_10px_5px_rgba(0,0,0,0.5)]"/>
        )
    }

    return(
        <div className='mt-20 sm:mb-32 mb-10'>
            <h1 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#291507] text-[36px] mb-10">Other photos</h1>
            <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-7 ">
                {images}
            </div>
        </div>
    )
}
