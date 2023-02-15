import { ProductType } from "../../types"
import { backApiClient } from "../backApi"

export const fetcherGetTopProducts = async () => {
    const { data } = await backApiClient.get<ProductType[]>( `product/products/top/` )
    return data
}