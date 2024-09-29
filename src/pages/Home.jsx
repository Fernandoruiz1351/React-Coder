import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

// export const Home = () => {

//   const productsData = [{
//     id:1,
//     name:"Zapatillas Nike"
//   },
//   {
//     id:2,
//     name:"Zapatillas Adidas"
//   },
//   {
//     id:3,
//     name:"Zapatillas Reebok"
//   },
//   {
//     id:4,
//     name:"Zapasasebok"
//   },
// ];

//   return <ItemListContainer products={productsData}/>

// };

export const Home = () => {

  const productsData = [
    {
      id: 1,
      name: "Zapatillas Nike"
    },
    {
      id: 2,
      name: "Zapatillas Adidas"
    },
    {
      id: 3,
      name: "Zapatillas Reebok"
    },
    {
      id: 4,
      name: "Zapasasebok"
    },
  ];

  return <ItemListContainer products={productsData} />;
};
