import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.js'


const getItems = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"un Item",
            price: 25.5,
            description: "El item se muestra bien ",
            img:""

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])


     return <ItemDetail item={item} />
    }

