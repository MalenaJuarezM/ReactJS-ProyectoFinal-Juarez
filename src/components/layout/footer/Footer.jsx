import "./Footer.css"
import { Box, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box className="footer">
            <Typography align="center" variant="body2" color={"secondary"}>
                El Atelier. Todos los derechos reservados.
                <br />
                Avenida Pergamino N°1970. CP 1900. La Plata, Buenos Aires, Argentina.
            </Typography>
        </Box>
    )
}

export default Footer