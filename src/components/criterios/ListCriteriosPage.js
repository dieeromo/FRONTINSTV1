import {SelectorCriterio} from './norender/SelectorCriterios'
import NavbarIST from '../comunes/NavbarIST'
import { Grid } from 'gridjs-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import React, { useRef, useEffect } from 'react';


//modificacion
export default function ListCrietriosPage(){
    const criterios =  SelectorCriterio()
    console.log(criterios)
    const columns = [
        {
            name:'Numeracion',
            attributes:{'data-field':'numeracion'}
        },
        'criterio'
    ]

    
 


  

    return(
        <>
        <NavbarIST/>
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

