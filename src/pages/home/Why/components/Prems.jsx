import React from 'react';

const Prems = ({ prem }) => {
    return (
        <div>
            <div className="prem">
                <div className="premWrap">
                    {prem.vector}
                    <div className="premAbout">
                        {prem.about}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Prems;