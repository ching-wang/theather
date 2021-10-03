import React from "react";

export type Show = {
  id: number;
  url: string;
  name: string;
  genres?: string[];
  language: string;
  runtime: number;
  rating: object;
  number: number;
  image?: {
    medium: string;
    original: string;
  } | null;
};

export type Season = {
  id: number;
  url: string;
  name: string;
  number: number;
  image?: {
    medium: string;
    original: string;
  } | null;
};

export type Episode = {
  id: number;
  name: string;
  season: number;
  number: number;
  image?: {
    medium: string;
    original: string;
  } | null;
}

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type InputHandler = (event: ReactChangeEvent) => void;

export type SearchResult = {
  score: number;
  show: Show;
};
