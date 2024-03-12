export const mockFilmsResponse = {
  data: {
    fields: {
      count: 6,
      pages: 1,
      next: null,
      previous: null,
      results: [
        {
          fields: {
            starships: [
              "/api/starships/2",
              "/api/starships/3",
              "/api/starships/5",
              "/api/starships/9",
              "/api/starships/10",
              "/api/starships/11",
              "/api/starships/12",
              "/api/starships/13",
            ],
            edited: "2014-12-20T19:49:45.256Z",
            vehicles: [
              "/api/vehicles/4",
              "/api/vehicles/6",
              "/api/vehicles/7",
              "/api/vehicles/8",
            ],
            planets: ["/api/planets/1", "/api/planets/2", "/api/planets/3"],
            producer: "Gary Kurtz, Rick McCallum",
            title: "A New Hope",
            created: "2014-12-10T14:23:31.880Z",
            episode_id: 4,
            director: "George Lucas",
            release_date: "1977-05-25",
            opening_crawl:
              "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            characters: [
              "/api/people/1",
              "/api/people/2",
              "/api/people/3",
              "/api/people/4",
              "/api/people/5",
              "/api/people/6",
              "/api/people/7",
              "/api/people/8",
              "/api/people/9",
              "/api/people/10",
              "/api/people/12",
              "/api/people/13",
              "/api/people/14",
              "/api/people/15",
              "/api/people/16",
              "/api/people/18",
              "/api/people/19",
              "/api/people/81",
            ],
            species: [
              "/api/species/1",
              "/api/species/2",
              "/api/species/3",
              "/api/species/4",
              "/api/species/5",
            ],
            url: "/api/films/1",
          },
        },
        {
          fields: {
            starships: [
              "/api/starships/3",
              "/api/starships/10",
              "/api/starships/11",
              "/api/starships/12",
              "/api/starships/15",
              "/api/starships/17",
              "/api/starships/21",
              "/api/starships/22",
              "/api/starships/23",
            ],
            edited: "2014-12-15T13:07:53.386Z",
            vehicles: [
              "/api/vehicles/8",
              "/api/vehicles/14",
              "/api/vehicles/16",
              "/api/vehicles/18",
              "/api/vehicles/19",
              "/api/vehicles/20",
            ],
            planets: [
              "/api/planets/4",
              "/api/planets/5",
              "/api/planets/6",
              "/api/planets/27",
            ],
            producer: "Gary Kurtz, Rick McCallum",
            title: "The Empire Strikes Back",
            created: "2014-12-12T11:26:24.656Z",
            episode_id: 5,
            director: "Irvin Kershner",
            release_date: "1980-05-17",
            opening_crawl:
              "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
            characters: [
              "/api/people/1",
              "/api/people/2",
              "/api/people/3",
              "/api/people/4",
              "/api/people/5",
              "/api/people/10",
              "/api/people/13",
              "/api/people/14",
              "/api/people/18",
              "/api/people/20",
              "/api/people/21",
              "/api/people/22",
              "/api/people/23",
              "/api/people/24",
              "/api/people/25",
              "/api/people/26",
            ],
            species: [
              "/api/species/1",
              "/api/species/2",
              "/api/species/3",
              "/api/species/6",
              "/api/species/7",
            ],
            url: "/api/films/2",
          },
        },
      ],
    },
  },
};

export const mockFilmResponse = {
  starships: [
    {
      name: "corvette",
      url: "/api/starships/2",
    },
    {
      name: "Star Destroyer",
      url: "/api/starships/3",
    },
    {
      name: "Light freighter",
      url: "/api/starships/10",
    },
    {
      name: "assault starfighter",
      url: "/api/starships/11",
    },
    {
      name: "Starfighter",
      url: "/api/starships/12",
    },
    {
      name: "Star dreadnought",
      url: "/api/starships/15",
    },
    {
      name: "Medium transport",
      url: "/api/starships/17",
    },
    {
      name: "Armed government transport",
      url: "/api/starships/22",
    },
    {
      name: "Escort ship",
      url: "/api/starships/23",
    },
    {
      name: "Star Cruiser",
      url: "/api/starships/27",
    },
    {
      name: "Starfighter",
      url: "/api/starships/28",
    },
    {
      name: "Assault Starfighter",
      url: "/api/starships/29",
    },
  ],
  edited: "2014-12-20T09:48:37.462Z",
  vehicles: [
    {
      name: "TIE/LN starfighter",
      url: "/api/vehicles/8",
    },
    {
      name: "TIE bomber",
      url: "/api/vehicles/16",
    },
    {
      name: "AT-AT",
      url: "/api/vehicles/18",
    },
    {
      name: "AT-ST",
      url: "/api/vehicles/19",
    },
    {
      name: "Sail barge",
      url: "/api/vehicles/24",
    },
    {
      name: "Bantha-II cargo skiff",
      url: "/api/vehicles/25",
    },
    {
      name: "TIE/IN interceptor",
      url: "/api/vehicles/26",
    },
    {
      name: "Imperial Speeder Bike",
      url: "/api/vehicles/30",
    },
  ],
  planets: [
    {
      name: "Tatooine",
      url: "/api/planets/1",
    },
    {
      name: "Dagobah",
      url: "/api/planets/5",
    },
    {
      name: "Endor",
      url: "/api/planets/7",
    },
    {
      name: "Naboo",
      url: "/api/planets/8",
    },
    {
      name: "Coruscant",
      url: "/api/planets/9",
    },
  ],
  producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
  title: "Return of the Jedi",
  created: "2014-12-18T10:39:33.255Z",
  episode_id: 6,
  director: "Richard Marquand",
  release_date: "1983-05-25",
  opening_crawl:
    "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
  characters: [
    {
      name: "Luke Skywalker",
      url: "/api/people/1",
    },
    {
      name: "C-3PO",
      url: "/api/people/2",
    },
    {
      name: "R2-D2",
      url: "/api/people/3",
    },
    {
      name: "Darth Vader",
      url: "/api/people/4",
    },
    {
      name: "Leia Organa",
      url: "/api/people/5",
    },
    {
      name: "Obi-Wan Kenobi",
      url: "/api/people/10",
    },
    {
      name: "Chewbacca",
      url: "/api/people/13",
    },
    {
      name: "Han Solo",
      url: "/api/people/14",
    },
    {
      name: "Jabba Desilijic Tiure",
      url: "/api/people/16",
    },
    {
      name: "Wedge Antilles",
      url: "/api/people/18",
    },
    {
      name: "Yoda",
      url: "/api/people/20",
    },
    {
      name: "Palpatine",
      url: "/api/people/21",
    },
    {
      name: "Boba Fett",
      url: "/api/people/22",
    },
    {
      name: "Lando Calrissian",
      url: "/api/people/25",
    },
    {
      name: "Ackbar",
      url: "/api/people/27",
    },
    {
      name: "Mon Mothma",
      url: "/api/people/28",
    },
    {
      name: "Arvel Crynyd",
      url: "/api/people/29",
    },
    {
      name: "Wicket Systri Warrick",
      url: "/api/people/30",
    },
    {
      name: "Nien Nunb",
      url: "/api/people/31",
    },
    {
      name: "Bib Fortuna",
      url: "/api/people/45",
    },
  ],
  species: [
    {
      name: "Human",
      url: "/api/species/1",
    },
    {
      name: "Droid",
      url: "/api/species/2",
    },
    {
      name: "Wookie",
      url: "/api/species/3",
    },
    {
      name: "Hutt",
      url: "/api/species/5",
    },
    {
      name: "Yoda's species",
      url: "/api/species/6",
    },
    {
      name: "Mon Calamari",
      url: "/api/species/8",
    },
    {
      name: "Ewok",
      url: "/api/species/9",
    },
    {
      name: "Sullustan",
      url: "/api/species/10",
    },
    {
      name: "Twi'lek",
      url: "/api/species/15",
    },
  ],
  url: "/api/films/3",
};
