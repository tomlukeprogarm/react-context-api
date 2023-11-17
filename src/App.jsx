import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import RightSide from './components/RightSide';
import defaultTweets from './assets/data/tweets.js';

const AppContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black';
    }, [theme]);

    return (
        <AppContext.Provider value={{ tweets, setTweets, theme, setTheme }}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </AppContext.Provider>
    );
}

export { App };
