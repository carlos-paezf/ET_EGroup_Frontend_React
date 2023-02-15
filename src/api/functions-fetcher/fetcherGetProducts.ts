import { ProductType } from "../../types"
import { backApiClient } from "../backApi"


type Response = {
    count: number
    pageCount: number
    next: string | null
    previous: string | null
    results: ProductType[]
}


export const fetcherGetProducts = async ( { pageParam = 1 }: { pageParam: number } ): Promise<ProductType[]> => {
    const params = new URLSearchParams()
    params.append( 'page', pageParam.toString() )

    const { data: { results } } = await backApiClient.get<Response>( `product/products/`, { params } )
    return results
}