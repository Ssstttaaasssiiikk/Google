import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation(){
    return(
        <nav>
            <span>
                <Link to = '/'>Google</Link>
                <Link to = '/counter'>Счетчик</Link>
            </span>
        </nav>
    );
}