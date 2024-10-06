export interface IAlbum {
  albumName: string;
  artistName: string;
  albumImg: string;
  bandcampURL: string;
  releaseDate: Date;
}

const dbAlbumsSeed: Array<IAlbum> = [
  {
    albumName: "Subliminal Entity",
    artistName: "Liminal Deities",
    albumImg: "https://f4.bcbits.com/img/a1856505258_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/subliminal-entity",
    releaseDate: new Date("2023-10-28"),
  },
  {
    albumName: "Active Observation of Evolving Abstractions in Hypnagogia",
    artistName: "Liminal Deities",
    albumImg: "https://f4.bcbits.com/img/a0803500458_10.jpg",
    bandcampURL:
      "https://nickprather.bandcamp.com/album/active-observation-of-evolving-abstractions-in-hypnagogia",
    releaseDate: new Date("2023-09-10"),
  },
  {
    albumName: "Inconsistent Corporeality",
    artistName: "Liminal Deities",
    albumImg: "https://f4.bcbits.com/img/a3710700707_10.jpg",
    bandcampURL:
      "https://nickprather.bandcamp.com/album/inconsistent-corporeality",
    releaseDate: new Date("2023-05-02"),
  },
  {
    albumName: "Exhumation of a Consciousness",
    artistName: "Liminal Deities",
    albumImg: "https://f4.bcbits.com/img/a0499223544_10.jpg",
    bandcampURL:
      "https://nickprather.bandcamp.com/track/exhumation-of-a-consciousness",
    releaseDate: new Date("2023-05-01"),
  },
  {
    albumName: "If Section Secrets",
    artistName: "Hello Hugo",
    albumImg: "https://f4.bcbits.com/img/a1128671548_10.jpg",
    bandcampURL: "https://hellohugo.bandcamp.com/album/if-section-secrets",
    releaseDate: new Date("2016-12-17"),
  },
  {
    albumName: "Motorcycle Milkman",
    artistName: "Hello Hugo",
    albumImg: "https://f4.bcbits.com/img/a1434800952_16.jpg",
    bandcampURL: "https://hellohugo.bandcamp.com/album/motorcycle-milkman",
    releaseDate: new Date("2014-04-21"),
  },
  {
    albumName: "Lexington Avington Bravington",
    artistName: "Hello Hugo",
    albumImg: "https://f4.bcbits.com/img/a0920882050_16.jpg",
    bandcampURL:
      "https://hellohugo.bandcamp.com/album/lexington-avington-bravington",
    releaseDate: new Date("2013-06-01"),
  },
  {
    albumName: "Hello Hugo",
    artistName: "Hello Hugo",
    albumImg: "https://f4.bcbits.com/img/a2669616087_16.jpg",
    bandcampURL: "https://hellohugo.bandcamp.com/album/hello-hugo",
    releaseDate: new Date("2011-10-24"),
  },
  {
    albumName: "Geometric Turquoise Bird",
    artistName: "GGsIE",
    albumImg: "https://f4.bcbits.com/img/a1294210841_10.jpg",
    bandcampURL:
      "https://nickprather.bandcamp.com/album/geometric-turquoise-bird",
    releaseDate: new Date("2015-03-01"),
  },
  {
    albumName: "Fractured Days",
    artistName: "Fractured Days Trio",
    albumImg: "https://f4.bcbits.com/img/a4113435769_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/fractured-days",
    releaseDate: new Date("2014-09-01"),
  },
  {
    albumName: "Haus of Freedom",
    artistName: "Haus of Freedom",
    albumImg: "https://f4.bcbits.com/img/a3747536810_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/haus-of-freedom",
    releaseDate: new Date("2012-06-01"),
  },
  {
    albumName: "The River Otters",
    artistName: "The River Otters",
    albumImg: "https://f4.bcbits.com/img/a4286072539_16.jpg",
    bandcampURL: "https://theriverotters.bandcamp.com/album/the-river-otters",
    releaseDate: new Date("2017-11-21"),
  },
];

export default dbAlbumsSeed;
