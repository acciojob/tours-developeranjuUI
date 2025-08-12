import React from 'react'

const Loading = () => {
    return (
        <div style={loadingStyle}>
            <h2>Loading...</h2>
        </div>
    )
}

const loadingStyle = {
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Loading;