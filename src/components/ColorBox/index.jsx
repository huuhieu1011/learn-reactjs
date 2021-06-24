import React, { useState } from 'react';

ColorBox.propTypes = {

};

function ColorBox(props) {
    const [color, setColor] = useState('while');
    return (
        <div>
            {color}

            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('while')}>Change to while</button>
        </div>
    );
}

export default ColorBox;