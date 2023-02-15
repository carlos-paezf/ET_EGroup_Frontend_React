import { Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
import withoutImage from '../../assets/without-image.svg'
import type { ProductType } from "../../types"


export const CardProductComponent: FC<ProductType> = ( { title, description, image, rating, slug } ) => {
    return (
        <Card variant="outlined" sx={ { width: "500px", maxWidth: "500px", mb: 3, height: '635px' } }>
            <CardContent>
                <CardMedia
                    component="img"
                    height="400"
                    src={ image }
                    image={ ( !image || image?.length < 20 ) ? withoutImage : image }
                    alt={ slug }
                />

                <Stack direction="column" justifyContent="start" textAlign="left" sx={ { px: 2, pt: 1 } }>
                    <Rating name="read-only" value={ rating } precision={ 0.5 } readOnly />

                    <Typography variant="h6">
                        { title }
                    </Typography>

                    <Typography height="75px" maxHeight="75px" textOverflow="ellipsis" overflow="hidden">
                        { description }
                    </Typography>
                </Stack>
            </CardContent>

            <CardActions>
                <Link to={ `/products/${ slug }` }>
                    <Button variant="text">Learn More</Button>
                </Link>
            </CardActions>
        </Card >
    )
} 