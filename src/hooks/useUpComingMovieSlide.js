import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
    return api.get(`movie/upcoming`)
}

export const useUpComingMoviesQuery = () => {
    return useQuery({
        queryKey : ['movie-upComing'],
        queryFn : fetchPopularMovies,
        select : (result => result.data),
    })
}
