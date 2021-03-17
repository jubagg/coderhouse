import React from 'react';
import {CartWidget} from './CartWidget.js';

export const NavBar = (props) => {
    return(
        <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-red-900 text-white">
        <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="leading-none text-2xl text-grey-darkest">
            <a className="no-underline text-grey-darkest hover:text-yellow-200" href="#">
                Tu Compu - Compra y Venta
            </a>
            </h1>
        </div>
        <nav>
            <ul className="list-reset md:flex md:items-center">
            < CartWidget ></CartWidget>
            <li className="md:ml-4">
                <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                inicio
                </a>
            </li>
            <li className="md:ml-4">
                <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                Productos
                </a>
            </li>
            <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                Acerca de
                </a>
            </li>
            <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                Contacto
                </a>
            </li>
            </ul>
        </nav>
        </header>


    )

}
