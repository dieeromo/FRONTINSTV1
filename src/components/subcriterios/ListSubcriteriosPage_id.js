import { listSubCriteriosFilterAction } from '../../actions/subcriteriosActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar_acreditacion from '../comunes/Navbar_acreditacionIST';
import { useParams } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListSubcriteriosPage_id() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSubCriteriosFilterAction(id));
  }, [dispatch]);

  const subcriteriosFilterList = useSelector((state) => state.subcriteriosFilterList);
  const { error, loading, subcriterios_filter_lista } = subcriteriosFilterList;

  return (
    <>
      <Navbar_acreditacion  />
      <div className="container mx-auto mt-10">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-6">Subcriterios</h2>
        <div>
          <table className="table-auto w-full shadow-md">
            <thead className="bg-gray-200">
              <tr className="text-center">
                <th className="py-2">Criterio</th>
                <th className="py-2">Numero</th>
                <th className="py-2">Subcriterio</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {subcriterios_filter_lista.map((item, index) => (
                <tr key={index} className="border px-4 py-2 text-center">
                  <td className="py-2">{item.criterio}</td>
                  <td className="py-2">{item.numeracion}</td>
                  <td className="py-2">{item.subCriterio}</td>
                  <td className="py-2">
                    <a href={`/indicadores/list/${item.id}`}>
                      <ArrowForwardIosIcon />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
