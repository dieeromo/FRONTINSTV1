import { listIndicadoresFilterAction } from '../../actions/indicadoresActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavbarIST from '../comunes/NavbarIST';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListIndicadoresPage_id() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listIndicadoresFilterAction(id));
  }, [dispatch]);

  const indicadoresFilterList = useSelector((state) => state.indicadoresFilterList);
  const { error, loading, indicadores_filter_lista } = indicadoresFilterList;

  return (
    <>
      <NavbarIST />
      <div className="container mx-auto mt-10">
        <h3 className="text-4xl font-bold text-center text-indigo-800 mb-6">Indicadores</h3>
        <table className="table-auto w-full shadow-md">
          <thead className="bg-gray-200">
            <tr className="text-center">
              <th className="py-2">Criterio</th>
              <th className="py-2">Subcriterio</th>
              <th className="py-2">Número</th>
              <th className="py-2">Indicador</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {indicadores_filter_lista.map((item, index) => (
              <tr key={index} className="border px-4 py-2 text-center">
                <td className="text-sm">{item.criterio}</td>
                <td className="text-sm">{item.subCriterio}</td>
                <td className="text-sm">{item.numeracion}</td>
                <td>{item.indicador}</td>
                <td>
                  <a href={`/evidencias/list/${item.id}`}>
                    <ArrowForwardIosIcon />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
    