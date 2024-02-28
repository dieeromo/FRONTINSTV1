import NavbarIST from '../comunes/Navbar_acreditacionIST';
import { listDocumentosAcreditacionAllAction } from '../../actions/documentosAcreditacionActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';

import {RUTA_SERVIDOR} from '../../ApiRoutes'

export default function TodaDocumentacionlist() {
  const [listaDocumentosLocal, setListaDocumentosLocal] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDocumentosAcreditacionAllAction());
  }, [dispatch, listaDocumentosLocal]);

  const documentosAcreditacionAllList = useSelector((state) => state.documentosAcreditacionAllList);
  const { error, loading, doc_acreditacion_all } = documentosAcreditacionAllList;
  //console.log(doc_acreditacion_all )

  // useEffect(() => {
  //   if (doc_acreditacion_all) {
  //     setListaDocumentosLocal(doc_acreditacion_all);
  //   }
  // }, [doc_acreditacion_all]);

  const columns = [
    {
      name: 'criterio',
      label: 'Criterio',
    },
    {
      name: 'subCriterio',
      label: 'Subcriterio',
    },
    {
      name: 'indicador_key',
      label: 'key',
    },
    
    {
      name: 'indicador',
      label: 'Indicador',
    },
    {
      name: 'evidencia_key',
      label: 'key evi',
    },
    {
      name: 'evidencia',
      label: 'Evidencia',
    },
    {
      name: 'numeracion',
      label: 'Key doc',
    },
    {
      name: 'documento',
      label: 'Doc',
    },
    {
      name: 'responsable',
      label:'resp'
    },
    {
      name: 'archivo',
      label: 'Archivo',
      options: {
        customBodyRender: (value, tableMeta) => (
          tableMeta.rowData[9] ? 
          <a href={RUTA_SERVIDOR+`${tableMeta.rowData[9]}`}>Ver</a>
          :
          <></>
        ),
      },
    },
    {
      name: 'coor_carrera',
      label : 'carrera'
    },
    {
      name: 'coor_institucionales',
      label : 'Coor Inst'
    },
    {
      name: 'otras_comisiones',
      label : 'Otras comisiones'
    },
    {
      name:'digitador',
      label:'dig'
    }

  ];

  const options = {
    selectableRows: 'none', // Deshabilita la selección en la primera fila
    // Otras opciones...
  };

  return (
    <>
      <NavbarIST />
      <div>
        <MUIDataTable
          title={'all'}
          data={doc_acreditacion_all}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
}