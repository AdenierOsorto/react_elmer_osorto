// import styles from './estilos'
import {Container} from './styles'
export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <Container>
            {cantidad > 9 ? '9+' : cantidad}
        </Container>
    )   
}
/**
 * 
 *  span -> Container 
 * 
 */