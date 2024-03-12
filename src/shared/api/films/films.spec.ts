import { mockFilmResponse, mockFilmsResponse } from "./_mocks";
import { getMoviesWithMutation, getSingleMovieWithMutation } from "./dataPipes";

jest.mock(".", () => ({
  getAllMovies: () => mockFilmsResponse,
  getSingleMovie: (filmId: string) => mockFilmResponse,
}));

const expectedAllMoviesResponse = [
  {
    title: "A New Hope",
    director: "George Lucas",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1977-05-25",
    episode_id: 4,
    url: "/api/films/1",
  },
  {
    title: "The Empire Strikes Back",
    director: "Irvin Kershner",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1980-05-17",
    episode_id: 5,
    url: "/api/films/2",
  },
  {
    title: "Return of the Jedi",
    director: "Richard Marquand",
    producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
    release_date: "1983-05-25",
    episode_id: 6,
    url: "/api/films/3",
  },
  {
    title: "The Phantom Menace",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "1999-05-19",
    episode_id: 1,
    url: "/api/films/4",
  },
  {
    title: "Attack of the Clones",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2002-05-16",
    episode_id: 2,
    url: "/api/films/5",
  },
  {
    title: "Revenge of the Sith",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2005-05-19",
    episode_id: 3,
    url: "/api/films/6",
  },
];

test("getMoviesWithMutation working as expected", async () => {
  const mockResponse = await getMoviesWithMutation();
  expect(mockResponse).toStrictEqual(expectedAllMoviesResponse);
});

test("getSingleMovieWithMutation working as expected", async () => {
  const mockResponse = await getSingleMovieWithMutation("1");
  // console.log(mockResponse);
  // expect(mockResponse).toStrictEqual(expectedAllMoviesResponse);
});
