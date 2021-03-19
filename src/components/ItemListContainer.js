import React from 'react';
import {ItemCount} from './ItemCount.js';

export const ItemListContainer = (props) => {
    return(
        <div className="container ">
        Items List
        <ItemCount stock="5" initial="1" />
      </div>
    )
}
