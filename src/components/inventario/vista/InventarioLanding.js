import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar_planificacion from '../../comunes/Navbar_planificacion';
import { listInventarioAction } from '../actions/inventarioActions';
import MUIDataTable from 'mui-datatables';

import reporte_inventario_banner from '../../../assets/reporte_inventario_banner.png';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function InventarioLanding() {
    const dispatch = useDispatch();


    const inventarioList = useSelector(state => state.inventarioList);
    const { loading, error, inventarioLista } = inventarioList;
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        dispatch(listInventarioAction());
    }, [dispatch]);

    const columns = [
        {
            name: 'cod_unico',
            label: 'Código Único',
        },
        {
            name: 'cod_senescyt',
            label: 'Código Senescyt',
        },
        {
            name: 'cod_instituto',
            label: 'Código Instituto',
        },
        {
            name: 'tipo',
            label: 'Tipo',
        },
        {
            name: 'descripcion',
            label: 'Descripción',
        },
        {
            name: 'materiales',
            label: 'Materiales',
        },
        {
            name: 'marca',
            label: 'Marca',
        },
        {
            name: 'modelo',
            label: 'Modelo',
        },
        {
            name: 'serie',
            label: 'Serie',
        },
        {
            name: 'color',
            label: 'Color',
        },
        {
            name: 'estado',
            label: 'Estado',
        },
        {
            name: 'ubicacion',
            label: 'Ubicación',
        },
        {
            name: 'asignado',
            label: 'Asignado',
        },
        {
            name: 'observacion',
            label: 'Observación',
        },
    ];

    const options = {
        selectableRows: 'none',
        onTableChange: (action, tableState) => {
            if (action === 'filterChange') {
                const filteredData = tableState.displayData.map(item => item.data);
                setFilteredData(filteredData);
            }
        },

    };

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(14);

        //const title = "Reporte de Inventario";
        const headers = [["Código Único", "Código Senescyt", "Código Instituto", "Tipo", "Descripción", "Materiales", "Marca", "Modelo", "Serie", "Color", "Estado", "Ubicación", "Asignado", "Observación"]];

        const data = filteredData.map(elt => [elt[0], elt[1], elt[2], elt[3], elt[4], elt[5], elt[6], elt[7], elt[8], elt[9], elt[10], elt[11], elt[12], elt[13]]);


        let content = {
            startY: 150,
            head: headers,
            body: data,
            styles: { fontSize: 6 }
        };

        // Carga la imagen
        var img = new Image()
        img.src = reporte_inventario_banner
        img.onload = function () {
            doc.addImage(this, 'PNG', 10, 10, 578, 90); // Ajusta las coordenadas (10, 10) y el tamaño (30, 30) 

            //doc.setFont('helvetica', 'bold');
            //doc.text(title, marginLeft+50, 125);
            doc.autoTable(content);
            doc.save("Inventario.pdf")
        }
    }

    return (
        <>
            <Navbar_planificacion />
            <div className="container mx-auto px-4 sm:px-8">
                <h1 className="text-4xl font-semibold mb-8">Lista de Inventarios</h1>
                <button onClick={exportPDF} className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Generar PDF
                </button>
                {loading ? (
                    <div>Cargando...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <div className="py-8">
                        <MUIDataTable
                            title={'all'}
                            data={inventarioLista}
                            columns={columns}
                            options={options}
                        />

                    </div>
                )}
            </div>
        </>
    );
}


