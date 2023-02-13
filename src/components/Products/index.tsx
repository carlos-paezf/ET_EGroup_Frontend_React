import { FC } from "react"
import { HeaderComponent } from "../Header"


export const ProductsComponent: FC = () => {
    return (
        <section id="products">
            <HeaderComponent title="Productos principales" description="Productos mejor calificados" />
        </section>
    )
}