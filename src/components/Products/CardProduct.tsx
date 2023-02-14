import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Rating, Stack, Typography } from "@mui/material"
import { FC } from "react"
import type { ProductType } from "../../types"
import withoutImage from '../../assets/without-image.svg'


export const CardProductComponent: FC<ProductType> = ( { title, description, image, rating, slug } ) => {
    return (
        <Card variant="outlined" sx={ { width: "500px", maxWidth: "500px", mb: 3 } }>
            <CardContent>
                <CardMedia
                    component="img"
                    height="400"
                    image={ image ?? withoutImage }
                    alt={ slug }
                />

                <Stack direction="column" justifyContent="start" textAlign="left" sx={ { px: 2, pt: 1 } }>
                    <Rating name="read-only" value={ rating } precision={ 0.5 } readOnly />

                    <Typography variant="h6">
                        { title }
                    </Typography>

                    <Typography>
                        { description }
                    </Typography>
                </Stack>
            </CardContent>

            <CardActions>
                <Button variant="text">Learn More</Button>
            </CardActions>
        </Card >
    )
} 