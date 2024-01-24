import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CounterContainer } from "../../common/counter/counterContainer";

const ItemDetail = ({ selectedProduct, onAdd, initial }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 340,
          height: 530,
          p: 1,
          m: 4,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={selectedProduct.img}
            alt={selectedProduct.title}
          />
          <CardContent sx={{ minHeight: 135 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="secondary"
            >
              {selectedProduct.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedProduct.description}
            </Typography>
            <br />
            <Typography variant="body5" color="text.secondary">
              ${selectedProduct.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box>
          <CounterContainer
            stock={selectedProduct.stock}
            onAdd={onAdd}
            initial={initial}
            selectedProduct={selectedProduct}
          />
        </Box>
      </Card>
    </>
  );
};

export default ItemDetail;
