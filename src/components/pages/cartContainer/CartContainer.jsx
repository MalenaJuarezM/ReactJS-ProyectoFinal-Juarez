import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartAlert = () => {
    Swal.fire({
      title: "¿Quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, vaciar.",
      denyButtonText: "No, seguir comprando.",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("El carrito ahora está vacío.", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tu carrito no se ha vaciado.", "", "warning");
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        m: 2,
      }}
    >
      {cart.map((product) => (
        <Card key={product.id} sx={{ width: 230, height: 230, p: 2, m: 2 }}>
          <Typography variant="body1" color="text.secondary">
            {" "}
            {product.title}{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            ${product.price}{" "}
          </Typography>
          <CardMedia
            component="img"
            height="110"
            object-fit="scale-down"
            image={product.img}
            alt={product.title}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {" "}
              Cantidad: {product.quantity}{" "}
            </Typography>
            <IconButton
              variant="outlined"
              onClick={() => deleteProductById(product.id)}
            >
              {" "}
              <DeleteIcon />
            </IconButton>
          </Box>
        </Card>
      ))}

      {cart.length > 0 ? (
        <Box sx={{ p: 2, m: 2 }}>
          <Typography variant="h5" color="text.secondary">
            Total: {total}{" "}
          </Typography>

          <Link to="/checkout">
            <Button sx={{ width: 100, p: 1, m: 1 }} variant="outlined">
              Finalizar compra
            </Button>
          </Link>
          <Button
            onClick={clearCartAlert}
            sx={{ width: 100, p: 1, m: 1 }}
            variant="outlined"
          >
            Vaciar carrito
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            m: 4,
          }}
        >
          <Typography variant="h5" color="text.secondary">
            Tu carrito está vacío.
          </Typography>
          <Link to="/">
            <Button sx={{ width: 600, p: 1, m: 1 }} variant="outlined">
              Explorar tienda
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default CartContainer;
