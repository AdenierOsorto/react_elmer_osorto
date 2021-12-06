import { Articulo } from "../Articulo";
import { Container } from './styles'
import useArticulos from '../../hooks/useArticulos'
export const Articulos = (props) => {
    // const filtro = props.filtro
    // const agregarAlCarro = props.agregarAlCarro
    const {filtro, agregarAlCarro} = useArticulos();
    return (
        <Container>
            {
                filtro.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
        </Container>

        
    )
}
/**
 *  Div    Container
 * 
 */