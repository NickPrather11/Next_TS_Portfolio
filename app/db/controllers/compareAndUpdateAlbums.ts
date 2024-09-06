import Album from '../../models/album'
import dbAlbumsSeed from '../seeds/dbAlbumsSeed'

const compareAndUpdateAlbums = () => {
    Album.find({}).then(dbAlbum => {
      let dbAlbums: Array<string> = [];
      dbAlbum.forEach(album => dbAlbums.push(album.albumName));
      dbAlbumsSeed.forEach(seedObj => {
        if (dbAlbums.length > 0) {
          dbAlbum.forEach(dbItem => {
            if (seedObj.albumName === dbItem.albumName) {
              let id = dbItem._id;
              if (seedObj.artistName !== dbItem.artistName) {
                Album.updateOne({ _id: id }, { artistName: seedObj.artistName }, { new: true }).catch(err =>
                    console.log(err.message)
                );
              }
              if (seedObj.albumImg !== dbItem.albumImg) {
                Album.updateOne({ _id: id }, { albumImg: seedObj.albumImg }, { new: true }).catch(err =>
                    console.log(err.message)
                );
              }
              if (seedObj.bandcampURL !== dbItem.bandcampURL) {
                Album.updateOne({ _id: id }, { bandcampURL: seedObj.bandcampURL }, { new: true }).catch(err =>
                    console.log(err.message)
                );
              }
              if (seedObj.releaseDate !== dbItem.releaseDate) {
                Album.updateOne({ _id: id }, { releaseDate: seedObj.releaseDate }, { new: true }).catch(err =>
                    console.log(err.message)
                );
              }
            } else if (dbAlbums.indexOf(seedObj.albumName) < 0) {
                Album.create(seedObj)
                  .then(newDbAlbum => {
                    console.log("New project added: ", newDbAlbum);
                  })
                  .catch(err => {
                    console.log(err.message);
                  });              
            }
          });
        } else {
          Album.create(seedObj)
            .then(newDbAlbum => {
              console.log("New project added: ", newDbAlbum);
            })
            .catch(err => {
              console.log(err.message);
            });
        }
      });
    });
}

export default compareAndUpdateAlbums