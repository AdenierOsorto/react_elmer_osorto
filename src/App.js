import { Fragment, useState, useEffect } from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import { informacion } from './api/basedatos'

function App() {
  const [data, setData] = useState(informacion)
  const [accion, setAccion] = useState(-1)

  useEffect(() =>{
    mensaje();
  }, [accion, data]);

  const mensaje = () =>{
    if(accion === -1){
      return
    }else if(!accion){
      alert("Se eliminó el producto correctamente");
    }else{
      alert("Se agregó el producto");
    }
  }
  const agregarAlCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }
    
    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
    setAccion(true)
  }
  const eliminarProducto = (producto) => {
    
    if(window.confirm('¿Quiere eliminar este producto?')){
      const index = data.carrito.findIndex(x => x.id === producto.id);
      data.carrito.splice(index, 1);
      setData({...data})
      setAccion(false)
    }
    
  }
  // App > Navbar > Carro > Burbuja > Numero de productos

  // let cantidad = data.carrito.length
  let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)

  return (
    <Fragment>
      <Navbar cantidad={cantidad} eliminarProducto = {eliminarProducto} productos={data.carrito} />
      <Articulos agregarAlCarro={agregarAlCarro}  data={data} />
    </Fragment>
  );
}

export default App;
