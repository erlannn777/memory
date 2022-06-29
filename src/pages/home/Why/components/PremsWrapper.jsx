import React from 'react';
import Prems from './Prems';

const PremsWrapper = ({ prems }) => {
    return (
        <div className="premsWrapper">
            {
                prems.map((prem) => {
                    return <Prems prem={prem} />
                })
            }
        </div>
    );
};

export default PremsWrapper;