import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react"

export const CardInfoComponent: FC = () => {
    return (
        <Card sx={ { maxWidth: 345, height: 750 } }>
            <CardMedia
                component="img"
                alt="green iguana"
                height="350"
                image="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <CardContent sx={ { padding: 5 } }>
                <Typography gutterBottom variant="h5" component="div">
                    Empleados
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis enim architecto quod placeat accusantium reiciendis blanditiis sunt qui asperiores corrupti, vitae quos tempore necessitatibus fugiat, distinctio iste similique laboriosam deserunt?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatibus delectus. Eligendi, cum voluptates ea excepturi qui enim. Illo nesciunt sint nobis ipsum dicta! Sunt blanditiis soluta ullam quos dolore?
                </Typography>
            </CardContent>
        </Card>
    )
}