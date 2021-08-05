import React, {useState, useEffect} from 'react'; 
import moment from 'moment';
import Greeting from './Greeting';

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
                <Greeting hour={time.format('HH')}/>
                <div className='timeContainer'>
                    {time.format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </div>
            </div>
        </div>
    )
}

export default Clock;