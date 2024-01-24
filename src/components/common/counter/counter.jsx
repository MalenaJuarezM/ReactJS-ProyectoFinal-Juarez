import { Button, Typography, Box, IconButton } from "@mui/material";
import "./counter.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../../context/cartContext";
import { useContext } from "react";

export const Counter = ({
  selectedProduct,
  sumar,
  restar,
  counter,
  onAdd,
  initial,
  resetear,
}) => {
  const { deleteProductById } = useContext(CartContext);

  const eliminar = () => {
    deleteProductById(selectedProduct.id);
    resetear();
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            className="button"
            color="primary"
            variant="contained"
            onClick={sumar}
          >
            <Typography variant="button" color="secondary">
              Sumar
            </Typography>
          </Button>
          <Box
            sx={{
              boxShadow: 3,
              width: 25,
              height: 20,
              m: 1,
            }}
            align="center"
          >
            <Typography variant="button" color="secondary">
              {counter}
            </Typography>
          </Box>
          <Button
            className="button"
            color="primary"
            variant="contained"
            onClick={restar}
          >
            <Typography variant="button" color="secondary">
              Restar
            </Typography>
          </Button>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            className="button"
            color="primary"
            variant="outlined"
            onClick={() => onAdd(counter)}
          >
            <Typography variant="button" color="secondary">
              Agregar
            </Typography>
          </Button>
          <br />
          {initial > 0 && (
            <>
              <Typography variant="caption" color="secondary">
                Ya tienes {initial} en el carrito.
              </Typography>
              <IconButton variant="outlined" onClick={eliminar}>
                {" "}
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
      </div>
    </>
  );
};
