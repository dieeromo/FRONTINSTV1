import { useParams, Link } from 'react-router-dom';
import { listDocumentosAcreditacionFilterAction } from '../../actions/documentosAcreditacionActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarIST from '../comunes/NavbarIST';

import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import ArticleIcon from '@mui/icons-material/Article';

export default function ListDocumentosAcreditacion() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDocumentosAcreditacionFilterAction(id));
  }, [dispatch, id]);

  const documentosAcreditacionFilterList = useSelector(state => state.documentosAcreditacionFilterList);
  const { error, loading, doc_acreditacion_filter } = documentosAcreditacionFilterList;

  return (
    <>
      <NavbarIST />
      <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
        <h3 className='text-4xl font-bold text-center text-indigo-900 mb-4'>Documentos</h3>

        <Link to={`/documentos_acreditacion/register/${id}`} className="text-indigo-600 underline mb-4 block">Nuevo documento</Link>

        {loading && <p className="text-center">Cargando documentos...</p>}
        {error ? <p className="text-center text-red-500">Error al cargar documentos: {error}</p> : null}

        <table className="table-auto w-full">
          <thead className='bg-gray-200'>
            <tr className='text-center'>
              <th className="px-4 py-2">Indicador</th>
              <th className="px-4 py-2">Evidencia</th>
              <th className="px-4 py-2">Key</th>
              <th className="px-4 py-2">Documento</th>
              <th className="px-4 py-2">Cargar</th>
              <th className="px-4 py-2">Responsable</th>
              <th className="px-4 py-2">Ver</th>
              <th className="px-4 py-2">Entrega</th>
              <th className="px-4 py-2">Carrera</th>
              <th className="px-4 py-2">Coordinaciones Inst</th>
              <th className="px-4 py-2">Otras</th>
            </tr>
          </thead>
          <tbody>
            {doc_acreditacion_filter.map(({ indicador, evidencia, numeracion, documento, id, responsable, archivo, fecha_limite }, index) => (
              <tr key={index} className='border px-4 py-2 text-center'>
                <td>{indicador}</td>
                <td>{evidencia}</td>
                <td>{numeracion}</td>
                <td>{documento}</td>
                <td><Link to={`/documentos_acreditacion/subir_archivo/${id}/${id}`} className="text-indigo-600"><VerticalAlignTopIcon /></Link></td>
                <td>{responsable}</td>
                <td>{archivo ? <a href={`http://localhost:8002${archivo}`} className="text-indigo-600"><ArticleIcon /></a> : null}</td>
                <td>{fecha_limite}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
