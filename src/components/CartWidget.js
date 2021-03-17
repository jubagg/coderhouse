import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = (props) => {
    return(
        <li className="md:ml-4">
            <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
            </a>
        </li>
    )
}
