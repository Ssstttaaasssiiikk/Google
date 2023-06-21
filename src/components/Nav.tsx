import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation(props: any){
    return(
        <nav>
            <span>
                <Link to = {props.way}>{props.name_page}</Link>
            </span>
        </nav>
    );
}