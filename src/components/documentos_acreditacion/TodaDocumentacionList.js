import NavbarIST from '../comunes/NavbarIST';
import { listDocumentosAcreditacionAllAction } from '../../actions/documentosAcreditacionActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';


export default function TodaDocumentacionlist() {
  const [listaDocumentosLocal, setListaDocumentosLocal] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDocumentosAcreditacionAllAction());
  }, [dispatch, listaDocumentosLocal]);

  const documentosAcreditacionAllList = useSelector((state) => state.documentosAcreditacionAllList);
  const { error, loading, doc_acreditacion_all } = documentosAcreditacionAllList;

  useEffect(() => {
    if (doc_acreditacion_all) {
      setListaDocumentosLocal(doc_acreditacion_all);
    }
  }, [doc_acreditacion_all]);

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
      name: 'indicador',
      label: 'Indicador',
    },
    {
      name: 'evidencia',
      label: 'Evidencia',
    },
    {
      name: 'documento',
      label: 'Documento',
    },
    {
      name: 'archivo',
      label: 'Archivo',
      options: {
        customBodyRender: (value, tableMeta) => (
          <a href={`http://localhost:8002${tableMeta.rowData[5]}`}>Ver</a>
        ),
      },
    },
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
          data={listaDocumentosLocal}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
}