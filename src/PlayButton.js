import React from 'react';

const PlayButton = (props) => {
    return (
        <button
            className="play-button"
            onClick={props.onClickHandler}
        >
            &gt;
        </button>
    );
};

export default PlayButton;
