import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {list_user_Action} from '../../../actions/userActions'


export  function SelectorUsuarios() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_user_Action())
    }, [dispatch])

    const userList = useSelector(state => state.userList)
    const { error, loading, lista_usuarios } = userList

    const user_lista = lista_usuarios.map((item) => ({
        label: item.first_name,
        value: item.id,
    }))


    return ( user_lista )
}