import React from 'react';
import {Outlet} from 'react-router-dom';
const Head = () => {
    return (
        <div>
            <header>header</header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Head;