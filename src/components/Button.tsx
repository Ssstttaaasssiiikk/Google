import React from 'react';

export function My_button(props: any){
    return(
        <form action={props.link}>
          <button>{props.button_text}</button>
        </form>
    );
}