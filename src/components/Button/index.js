// import styles from './estilos'
import { Container } from "./styles"
export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <Container onClick={() => agregarAlCarro(prod)} >{children}</Container>
    )
}
