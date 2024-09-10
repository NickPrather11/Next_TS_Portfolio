import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'

const Loading = () => {
    return (
        <div className="place-self-center">
            <ScaleLoader color="white" loading={true} />
        </div>
    )
}

export default Loading