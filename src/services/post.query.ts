import { useQuery } from "react-query"
import { Post } from "../App"

export const useQueryGetAllPosts = () => {

    return useQuery<Post[], Error>({
        queryKey: ['all_posts'],
        queryFn: async () => fetch('http://127.0.0.1:3001/api/post/allPosts').then((res) => res.json()),
        cacheTime: Infinity,
        suspense: true,
    })
}