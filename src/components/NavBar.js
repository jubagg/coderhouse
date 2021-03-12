import React from 'react';

export const NavBar = (props) => {
    return(
        <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-gray-900 text-white">
        <div class="flex items-center justify-between mb-4 md:mb-0">
            <h1 class="leading-none text-2xl text-grey-darkest">
            <a class="no-underline text-grey-darkest hover:text-yellow-200" href="#">
                Tu Compu - Compra y Venta
            </a>
            </h1>

            <a class="text-black hover:text-orange md:hidden" href="#">
            <i class="fa fa-2x fa-bars"></i>
            </a>
        </div>
        <nav>
            <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
                <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                inicio
                </a>
            </li>
            <li class="md:ml-4">
                <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                Productos
                </a>
            </li>
            <li class="md:ml-4">
                <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                Acerca de
                </a>
            </li>
            <li class="md:ml-4">
                <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-yellow-200 md:border-none md:p-0" href="#">
                Contacto
                </a>
            </li>
            </ul>
        </nav>


        </header>
    )
}
