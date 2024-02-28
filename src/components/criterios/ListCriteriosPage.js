import {SelectorCriterio} from './norender/SelectorCriterios'
import Navbar_acreditacion from '../comunes/Navbar_acreditacionIST'
import { Grid } from 'gridjs-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector } from 'react-redux'

import React, { useRef, useEffect } from 'react';
import { useSelect } from '@mui/base';


//modificacion
export default function ListCrietriosPage(){
    const criterios =  SelectorCriterio()
    // PRUBA

    console.log("criterios")
   




    const columns = [
        {
            name:'Numeracion',
            attributes:{'data-field':'numeracion'}
        },
        'criterio'
    ]

    


    return(
        <>
        {/* <Navbar_acreditacion/> */}
        <div>
            <h5 className="text-4xl font-bold text-center text-indigo-800">
                Criterios
            </h5>
            <div >
                <table className="table-auto w-1/2 shadow-md mt-6 mx-auto">
                    <thead className='bg-gray-200'>
                        <tr className='text-center'>
                            <th>Numero</th>
                            <th>Criterio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            criterios.map((item,index)=>(
                                <tr key={index} className='border px-4 py-2 text-center'>
                                    <td>  {item.numeracion} </td>
                                    <td>{item.criterio}  </td>
                                    <td> <a href={`/subcriterios/list/${item.id}`}><ArrowForwardIcon/></a></td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>

        </div>

 

        </>
    )
}

