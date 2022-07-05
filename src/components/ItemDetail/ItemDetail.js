import './ItemDetail.css';
import Item from '../Item/Item';
import React from 'react';

function ItemDetail(props) { 


  return (
    <div>
      {props.producto.map((item)=>(
        <Item 
       nombre= {item.nombre}
       key= {item.id}
       precio= {item.precio}
       descripcion= {item.descripcion}
        />
      ))}
    </div>
  );
}

export default ItemDetail;

