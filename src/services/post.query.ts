import { useQuery } from "react-query"
import { Post } from "../App"

export const useQueryGetAllPosts = () => {
    return useQuery<Post[], Error>({
        queryKey: ['all_posts'],
        queryFn: () => fetch('http://127.0.0.1:33961/posts').then((res) => res.json()),
        cacheTime: Infinity,
        suspense: true,
    })
}