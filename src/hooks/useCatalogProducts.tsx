import { useInfiniteQuery } from "@tanstack/react-query"
import { fetcherGetProducts } from "../api/functions-fetcher"


export const useCatalogProducts = () => {
    const products = useInfiniteQuery(
        [ 'products' ],
        ( data ) => fetcherGetProducts( {
            pageParam: data.pageParam
        } ),
        {
            getNextPageParam: ( next, pages ) => {
                if ( !next || next === null ) return
                return pages.length + 1
            },
            staleTime: 1000 * 60 * 5
        },

    )

    return { products }
}