import React, { useEffect, useState } from "react";
import {ItemCount} from './ItemCount.js';
import {ItemList} from "./ItemList.js"

export default function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(()=>{

      const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve([
            { id:1, title:"Mother", price:20000, pictureUrl:"https://lh3.googleusercontent.com/proxy/dEh7BAbsZceCauFSd-5i2RZGxiBkz_GOg-RQUs4ccGFJL-gikd2KB-msV-z9pXe0EWSqrkRdy9yQO9kIAs_v1-6c-vqfa5rRJ9www3Epv0M3jUTiPUm9-9rjCMtWPQq52OxoU0U" },
            { id:2, title:"CPU", price:14000, pictureUrl:"https://lh3.googleusercontent.com/proxy/dmGwCk-76LZsYFmbkyenara6VdAgJsyaSynWT4ANOsI8Mo6VouXgHEix1lAHdHE9SzDx7tuan63QLtY3McLqiqBHiBZGHf3u"},
            { id:3, title:"Memoria DDR4", price:6000, pictureUrl:"https://www.corsair.com/medias/sys_master/images/images/h7a/h49/8988098330654/-CMK8GX4M1D3000C16-Gallery-VENG-LPX-BLK-01.png" }
          ])
        },2000)
      })

      prom.then((resultado)=>{
        setItems(resultado)
      })

    })

    return (
      <div className=" ">

        <ItemList items={items}/>
        <ItemCount stock="6" initial="2" />
      </div>
    );
  }

/* export const ItemListContainer = (props) => {
    return(
        <div className="container ">
        Items List
        <ItemCount stock="5" initial="1" />
      </div>
    )
} */
