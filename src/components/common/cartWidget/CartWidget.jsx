import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <>
      <Badge showZero badgeContent={total} color="secondary">
        <ShoppingCartIcon fontSize="large" color="secondary" />
      </Badge>
    </>
  );
};
