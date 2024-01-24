import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState({});

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(id);

  useEffect(() => {
    let itemCollection = collection(database, "products");

    let refDoc = doc(itemCollection, id);

    getDoc(refDoc).then((respuesta) => {
      setSelectedProduct({ id: respuesta.id, ...respuesta.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let product = {
      ...selectedProduct,
      quantity: cantidad,
    };

    if (cantidad > 0) {
      addToCart(product);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "El producto se agregó al carrito.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Debes indicar una cantidad.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <ItemDetail
      selectedProduct={selectedProduct}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
