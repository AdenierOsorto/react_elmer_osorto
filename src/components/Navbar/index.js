import { Carro } from '../Carro'
import styles from './estilos'

export const Navbar = ({ cantidad, productos, eliminarProducto }) => {
    return (
        <nav style={styles.nav}>
            <p>Logo</p>
            <Carro cantidad={cantidad} eliminarProducto = {eliminarProducto} productos={productos} />
        </nav>
    )
}