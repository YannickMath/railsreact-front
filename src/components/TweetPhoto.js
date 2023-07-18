// code le composant TweetPhoto qui affiche la photo du tweet

import React from 'react';
import '../App.css';

const TweetPhoto = (props) => {
    return (
        <div className="mainTweetPhoto">
            <img src={props.src} alt="TweetPhoto" />
        </div>
    );
}

export default TweetPhoto;