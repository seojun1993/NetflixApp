import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
    return api.get(`movie/top_rated`)
}

export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey : ['movie-topRated'],
        queryFn : fetchPopularMovies,
        select : (result => result.data),
    })
}
