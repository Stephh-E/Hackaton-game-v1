import React from 'react';
import candleImage from './public/assets/candle.png'; 

const Candles = ({ candles}) => {
    return (
        <div>
            {candles.map((candle, index) => (
                <img 
                key={index}
                src={candleImage}
                alt="Candle"
                style={{
                    position: 'absolute'
                    left: `${candle.x}px`,
                    top: `${candle.y}px`,
                }}
            />
        ))}
    </div>
    );
};

export default Candles;
       
