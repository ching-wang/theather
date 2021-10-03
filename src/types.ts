import React from "react";

export type Show = {
    id: number,
    url: string,
    name: string;
    genres: string[],
    language: string,
    runtime: number,
    rating: object,
}

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>

export type InputHandler = (event: ReactChangeEvent) => void

export type SearchResult = {
  score: number;
  show: Show;
};
