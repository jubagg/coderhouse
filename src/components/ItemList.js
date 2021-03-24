import React from 'react'
import { Item } from './Item.js'

export const ItemList = ({items=[]}) => {


    return (
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}
