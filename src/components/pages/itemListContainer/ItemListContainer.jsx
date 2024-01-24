import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
/*import { products } from "../../../productsMock";*/

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(database, "products");
    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((respuesta) => {
      let newArray = respuesta.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });
  }, [categoryName]);

  /*const rellenarDB = () => {
    const prodCollection = collection(database, "products");

    products.forEach((elemento) => {
      addDoc(prodCollection, elemento);
    });
  };*/

  return (
    <>
      {/* <Button onClick={rellenarDB}>Rellenar</Button> */}
      {items.length === 0 ? (
        <BarLoader
          color="hsla(40, 23%, 51%, 0.59)"
          height={10}
          speedMultiplier={1}
          width={400}
        />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
