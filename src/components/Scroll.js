import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid #000', height: '400px', backgroundColor: 'rgba(200, 180, 80, 0.5)' }}>
            {props.children}
        </div>
    )
}

export default Scroll;