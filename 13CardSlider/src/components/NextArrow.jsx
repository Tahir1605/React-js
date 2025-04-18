import React from 'react'

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer"
        onClick={onClick}
      >
        ▶
      </div>
    )
}

export default NextArrow
