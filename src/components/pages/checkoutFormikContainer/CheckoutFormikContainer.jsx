import { Button, TextField, Box, Typography, Card} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { serverTimestamp } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutFormikContainer = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const enviarOrden = (formDetails) => {
    let orden = {
      buyer: formDetails,
      items: cart,
      total,
      time: serverTimestamp(),
    };

    const ordersCollection = collection(database, "ordenes");
    addDoc(ordersCollection, orden).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(database, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", telefono: "", email: "" },
    onSubmit: (formDetails) => {
      enviarOrden(formDetails);
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo obligatorio.")
        .max(20, "Máximo 20 caracteres."),
      apellido: Yup.string()
        .required("Campo obligatorio.")
        .max(20, "Máximo 20 caracteres."),
      telefono: Yup.string()
        .required("Campo obligatorio.")
        .max(20, "Teléfono inválido.")
        .matches(phoneRegExp, "Teléfono inválido."),
      email: Yup.string()
        .required("Campo obligatorio.")
        .email("Email inválido."),
    }),
  });

  return (
    <>
      {orderId ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: 400, height: 150, p: 3, m: 3 }}>
            <Typography variant="h6" color="text.secondary">
              ¡Gracias por tu compra! Tu número de comprobante es el siguiente:{" "}
              <Typography color="primary">{orderId} </Typography>
            </Typography>
          </Card>
          <Link to="/">
            <Button sx={{ width: 400, p: 1, m: 3 }} variant="outlined">
              Explorar tienda
            </Button>
          </Link>
        </Box>
      ) : (
        <form
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          style={{ padding: "50px" }}
          onSubmit={handleSubmit}
        >
          <TextField
            style={{ margin: "20px" }}
            name="nombre"
            label="Nombre"
            variant="standard"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
          <TextField
            style={{ margin: "20px" }}
            name="apellido"
            label="Apellido"
            variant="standard"
            onChange={handleChange}
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
          />
          <br />
          <TextField
            style={{ margin: "20px" }}
            name="telefono"
            label="Teléfono"
            variant="standard"
            onChange={handleChange}
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
          />
          <TextField
            style={{ margin: "20px" }}
            name="email"
            label="Email"
            variant="standard"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <br />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ width: 200, p: 1, m: 1 }}
              type="submit"
              variant="outlined"
            >
              Enviar
            </Button>
            <Link to="/">
              <Button
                sx={{ width: 200, p: 1, m: 1 }}
                type="button"
                variant="outlined"
              >
                Cancelar
              </Button>
            </Link>
          </Box>
        </form>
      )}
    </>
  );
};

export default CheckoutFormikContainer;
