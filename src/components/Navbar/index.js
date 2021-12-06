import { Carro } from '../Carro'
import styles from './estilos'
import useNavbar from '../../hooks/useNavbar'
export const Navbar = () => {
    const { cantidad, productos, eliminarProducto, inputBuscar, buscarProducto, data} = useNavbar();
    return (
        <nav style={styles.nav}>
            <p>Logo</p>
            <input style={styles.input} placeholder={'Enter a product name'} type="text" ref={inputBuscar}/>
            <button style={styles.btn} onClick={() => buscarProducto(data)}>Search</button>
            <Carro cantidad={cantidad} eliminarProducto = {eliminarProducto} productos={productos} />
        </nav>
    )
}