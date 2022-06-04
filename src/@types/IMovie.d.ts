import { ITmdbData } from "./ITmdbData";

export interface IMovie {
    name?: string,
    year?: string,
    releaseDate?: Date,
    wikiText?: string,
    similar?: IMovie[],
    _initialized: boolean
}