import React, {useState, useEffect} from 'react'; 
import moment from 'moment';

const Clock = () => {
    const [time, setTime] = useState(moment())

    
    useEffect(() => {
        const interval = setInterval(() => setTime(moment(), 1000))
        return () => {
          clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div className='clockContainer'>
                <h2>Today's Task ✔️</h2>
                <h3>{time.format('ll')}</h3>
            </div>
        </div>
    )
}

export default Clock;