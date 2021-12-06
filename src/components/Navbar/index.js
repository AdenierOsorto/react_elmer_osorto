import { Carro } from '../Carro'
import styles from './estilos'
import {Container, Input, Btn} from './styles'
import useNavbar from '../../hooks/useNavbar'
export const Navbar = () => {
    const { cantidad, productos, eliminarProducto, inputBuscar, buscarProducto, data} = useNavbar();
    return (
        <Container >
            <p>Logo</p>
            <Input placeholder={'Enter a product name'} type="text" ref={inputBuscar}/>
            <Btn  onClick={() => buscarProducto(data)}>Search</Btn>
            <Carro cantidad={cantidad} eliminarProducto = {eliminarProducto} productos={productos} />
        </Container>
    )
}

/**
 *  Nav Container
 *  input Input
 *  button btn
 * 
 */