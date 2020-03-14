import React from 'react';
import './homepage.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = ({history}) => {
    // console.log(props);
    return(
        <div className='homepage'>
            <Directory />
        </div>
    )
};

export default HomePage;