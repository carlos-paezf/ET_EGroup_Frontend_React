import { FC } from "react"
import { HeaderComponent } from "../Header"
import { CardProductComponent } from './CardProduct'
import { Button, Grid, Stack } from '@mui/material'
import type { ProductType } from "../../types"


const products: ProductType[] = [
    {
        id: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil. Tenetur enim animi totam placeat harum fugiat esse ab doloremque officiis libero excepturi repellat fuga, quos veritatis distinctio explicabo est.",
        stock: 10,
        price: 10.0,
        slug: "producto-1",
        rating: 4.7,
        tags: [
            "tag1",
            "tag2"
        ],
        title: "Product 1",
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
    },
    {
        id: 2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil. Tenetur enim animi totam placeat harum fugiat esse ab doloremque officiis libero excepturi repellat fuga, quos veritatis distinctio explicabo est.",
        stock: 20,
        price: 20.0,
        slug: "producto-2",
        rating: 4.5,
        tags: [
            "tag1",
            "tag3"
        ],
        title: "Product 2"
    },
    {
        id: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil. Tenetur enim animi totam placeat harum fugiat esse ab doloremque officiis libero excepturi repellat fuga, quos veritatis distinctio explicabo est.",
        stock: 30,
        price: 30.0,
        slug: "producto-3",
        rating: 4,
        tags: [
            "tag2",
            "tag3"
        ],
        title: "Product 3",
        image: 'https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        id: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nihil. Tenetur enim animi totam placeat harum fugiat esse ab doloremque officiis libero excepturi repellat fuga, quos veritatis distinctio explicabo est.",
        stock: 30,
        price: 30.0,
        slug: "producto-4",
        rating: 4.4,
        tags: [
            "tag2",
            "tag3"
        ],
        title: "Product 4"
    },
]


export const ProductsComponent: FC = () => {
    return (
        <section id="products">
            <HeaderComponent title="Productos principales" description="Productos mejor calificados" />
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={ 2 }>
                <Grid item width="100%">
                    <Grid container spacing={ 2 } sx={ {
                        direction: 'row',
                        justifyContent: 'start',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        overflow: 'auto',
                        with: '100%',
                        px: { sm: 0, md: 5 }
                    } }>
                        {
                            products.map( product => (
                                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 3 } key={ product.id } sx={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
                                    <CardProductComponent { ...product } key={ product.slug } />
                                </Grid>
                            ) )
                        }
                    </Grid>
                </Grid>

                <Grid item width="100%">
                    <Button variant="contained">Ver más</Button>
                </Grid>
            </Grid>
        </section >
    )
}