import { Movie } from "../types/Movie";
import { MovieDetail } from "../types/MovieDetail";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
    isLoading: boolean;
    page: number;
    total_pages: number;
    items: Movie[];
    // genres: Genre[];
    movieDetails: MovieDetail | null;
    error: string;
}

const initialState: State = {
    items: [],
    page: 0,
    total_pages: 0,
    isLoading: false,
    movieDetails: null,
    error: ""
}

const homerReducer = createSlice({
    name: "movie",
    initialState,
    reducers: {},
})

export default homerReducer.reducer