import React from 'react'

export const OtherPhoto = ({catInfos}) => {
    const images = []

    for(let i = 1; i< catInfos.length; i++){
        images.push(
            <img src={catInfos[i].url} key={i} className="w-[345px] h-[278px] object-cover rounded-[25px] shadow-[10px_10px_10px_5px_rgba(0,0,0,0.5)]"/>
        )
    }

    return(
        <div className='mt-20 mb-32'>
            <h1 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#291507] text-[36px] mb-10">Other photos</h1>
            <div className="grid grid-cols-4 gap-10 ">
                {images}
            </div>
        </div>
    )
}
