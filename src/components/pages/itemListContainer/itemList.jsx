import { Box } from "@mui/material"
import { ProductCard } from "../../common/productCard/ProductCard"

export const ItemList = ({ items }) => {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', m: 3 }}>
            {
                items.map((item) => {
                    return <ProductCard item={item} key={item.id} />
                })
            }

        </Box>

    )
}