import { Articulo } from "../Articulo";
import styles from './estilos'
import useArticulos from '../../hooks/useArticulos'
export const Articulos = (props) => {
    // const filtro = props.filtro
    // const agregarAlCarro = props.agregarAlCarro
    const {filtro, agregarAlCarro} = useArticulos();
    return (
        <div style={styles.div}>
            {
                filtro.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
        </div>

        
    )
}