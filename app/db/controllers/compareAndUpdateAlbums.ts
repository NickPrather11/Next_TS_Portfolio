import Album from "../../models/album";
import scrapedAlbumData from "./bandcampScraper";

const compareAndUpdateAlbums = async () => {
  const bandcampAlbums = await scrapedAlbumData();
  Album.find({}).then((dbAlbum) => {
    let dbAlbumNames: Array<string> = [];
    dbAlbum.forEach((album) => dbAlbumNames.push(album.albumName));
    bandcampAlbums.forEach((bandcampAlbum) => {
      if (dbAlbumNames.length > 0) {
        dbAlbum.forEach((dbItem) => {
          if (bandcampAlbum.albumName === dbItem.albumName) {
            let id = dbItem._id;
            if (bandcampAlbum.artistName !== dbItem.artistName) {
              Album.updateOne(
                { _id: id },
                { artistName: bandcampAlbum.artistName },
                { new: true }
              ).catch((err) => console.log(err.message));
            }
            if (bandcampAlbum.albumImg !== dbItem.albumImg) {
              Album.updateOne(
                { _id: id },
                { albumImg: bandcampAlbum.albumImg },
                { new: true }
              ).catch((err) => console.log(err.message));
            }
            if (bandcampAlbum.bandcampURL !== dbItem.bandcampURL) {
              Album.updateOne(
                { _id: id },
                { bandcampURL: bandcampAlbum.bandcampURL },
                { new: true }
              ).catch((err) => console.log(err.message));
            }
            if (bandcampAlbum.releaseDate !== dbItem.releaseDate) {
              Album.updateOne(
                { _id: id },
                { releaseDate: bandcampAlbum.releaseDate },
                { new: true }
              ).catch((err) => console.log(err.message));
            }
          } else if (dbAlbumNames.indexOf(bandcampAlbum.albumName) < 0) {
            Album.create(bandcampAlbum)
              .then((newDbAlbum) => {
                console.log("New album added: ", newDbAlbum);
              })
              .catch((err) => {
                console.log(err.message);
              });
          }
        });
      } else {
        Album.create(bandcampAlbum)
          .then((newDbAlbum) => {
            console.log("New album added: ", newDbAlbum);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  });
};

export default compareAndUpdateAlbums;
