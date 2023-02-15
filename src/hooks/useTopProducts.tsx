import { useQuery } from "@tanstack/react-query"
import { fetcherGetTopProducts } from "../api/functions-fetcher"


export const useTopProducts = () => {
    const topProducts = useQuery(
        [ 'top-products' ],
        fetcherGetTopProducts,
        {
            refetchOnWindowFocus: false
        }
    )

    return { topProducts }
}