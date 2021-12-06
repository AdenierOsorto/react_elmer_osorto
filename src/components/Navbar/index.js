import { Carro } from '../Carro'
import styles from './estilos'

export const Navbar = ({ cantidad, productos, eliminarProducto, inputBuscar, buscarProducto, data}) => {
    return (
        <nav style={styles.nav}>
            <p>Logo</p>
            <input style={styles.input} type="text" ref={inputBuscar}/>
            <button style={styles.btn} onClick={() => buscarProducto(data)}>buscar</button>
            <Carro cantidad={cantidad} eliminarProducto = {eliminarProducto} productos={productos} />
        </nav>
    )
}