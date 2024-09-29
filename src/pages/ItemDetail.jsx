import React from 'react'
import { ItemDetailContainer } from '../components/ItemDetailContainer'
import { useItemById } from '../services/hooks'

export const ItemDetail = () => {
    const {} = useItemById();
    return ( <ItemDetailContainer />
  )
};


