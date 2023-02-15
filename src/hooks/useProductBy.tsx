import { useQuery } from "@tanstack/react-query"
import { fetcherGetProductBy } from '../api/functions-fetcher'


export const useProductBy = ( slug: string ) => {
    const product = useQuery(
        [ 'product', { slug } ],
        () => fetcherGetProductBy( slug ),
        {
            refetchOnWindowFocus: false
        }
    )

    return { product }
}