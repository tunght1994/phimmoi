import { Movie } from "./Movie";

export interface Movies {
    results : Movie[],
    page: number,
    total_pages: number,
}