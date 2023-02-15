import { ProductType } from "../../types"
import { backApiClient } from "../backApi"

export const fetcherGetProductBy = async ( slug: string ) => {
    const { data } = await backApiClient.get<ProductType>( `product/products/${ slug }/` )
    return data
}