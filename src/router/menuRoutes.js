import CartContainer from "../components/pages/cartContainer/CartContainer";
import CheckoutFormikContainer from "../components/pages/checkoutFormikContainer/CheckoutFormikContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
    {
        id: 'Home',
        path: '/',
        Element: ItemListContainer
    },
    {
        id: 'Category',
        path: '/category/:categoryName',
        Element: ItemListContainer
    },
    {
        id: 'Cart',
        path: '/cart',
        Element: CartContainer
    },
    {
        id: 'ItemDetail',
        path: '/itemDetail/:id',
        Element: ItemDetailContainer
    },
    {
        id: 'Checkout',
        path: '/checkout',
        Element: CheckoutFormikContainer
    },
]
