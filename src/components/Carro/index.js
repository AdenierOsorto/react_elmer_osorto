import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import {CarroContenedor, CarroB, ListaArticulos, Ul, Li, DeleteButton} from './styles'
export const Carro = ({ cantidad, productos, eliminarProducto}) => {
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)
    


    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <CarroContenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <CarroB onClick={handleMostrarCarro}>
                Carro
            </CarroB>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos >
                        <Ul>
                            {
                                productos.map(x => {
                                    return (
                                        <Li key={x.id}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><DeleteButton onClick={() => eliminarProducto(x)}>X</DeleteButton>{x.nombre }</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </Li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                    </ListaArticulos>
            }
        </CarroContenedor>

    )
}


/**
 *  div -> CarroContenedor
 *  Button -> Carro
 *  div -> listaArticulos
 *  ul -> ul
 *  li -> li
 * 
 */