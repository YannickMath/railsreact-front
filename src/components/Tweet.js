//créé un composant Tweet qui affiche un tweet et ses informations

import React from 'react';
import '../App.css';
import TweetPhoto from './TweetPhoto';
import TweetDescription from './TweetDescription';
import TweetNavigation from './TweetNavigation';
import TweetSearchBar from './TweetSearchBar';

const Tweet = () => {
    return (
        <div className="mainTweet">
        <div id="TweetPhoto">
            <TweetPhoto src="/twitter.webp" />
        </div>
        <div id="TweetDescription">
            <TweetDescription />
        </div>
        <div id="TweetSearchBar">
            <TweetSearchBar />
        </div>
        <div id="TweetNavigation">
            <TweetNavigation />
        </div>
        </div>
    );
    } ;

export default Tweet;