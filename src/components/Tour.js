import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    const shortText = info.length > 200 ? info.slice(0, 200) + "..." : info;

    return (
        <article style={cardStyle}>
            <img src={image} alt={name} style={imgStyle} />
            <footer style={{padding: '1rem'}}>
                <div style={headerStyle}>
                    <h4 style={{margin: 0}}>{name}</h4>
                    <h4 style={{color: "#49a6e9", margin: 0}}>${price}</h4>
                </div>
                <p style={{lineHeight: 1.6}}>
                    {readMore ? info : shortText}{" "}
                    {info.length > 200 && (
                        <button
                        onClick={()=>setReadMore((prev)=>!prev)}
                        style={readMoreBtnStyle}
                        >
                            {readMore ? "See less":"Show more"}
                        </button>
                    )}
                </p>
                <div style={{textAlign: 'right'}}>
                    <button onClick={()=> removeTour(id)} style={removeBtnStyle}>
                        Remove
                    </button>
                </div>
            </footer>
        </article>
    )
}

const cardStyle = {
    border: '1px solid #eee',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
    background: '#fff'
}

const imgStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    display: 'block'
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
}

const readMoreBtnStyle = {
    border: 'none',
    background: 'transparent',
    color: '#0d6efd',
    cursor: 'pointer',
    padding: 0,
    fontWeight: '500',
    marginLeft: '6px'
}

const removeBtnStyle = {
    background: '#ff6b6b',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 0.8rem',
    borderRadius: '6px',
    cursor: 'pointer',
}

export default Tour;