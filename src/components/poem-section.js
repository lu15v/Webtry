import React from 'react';
import PoemCard from './poem-card';

import '../styles/poem-section.css';

const PoemSection = props =>{

    const {poems} = props;

    return(
        <div className="hero container">
            {poems.map((poem, index) => {
                return <PoemCard key={poem.title} title={poem.title} body={poem.body} date={poem.date} position={index}/>
            })}
        </div>
    )
}


export default PoemSection;