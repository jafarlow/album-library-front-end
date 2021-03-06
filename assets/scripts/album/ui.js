'use strict'
// REQUIRE LINKS
const albumsTemplate = require("../templates/albums.handlebars")
const store = require("../store")

// CREATE AN ALBUM
const createAlbumSuccess = function (response) {
  $("#message").html(`<i>${response.album.title}</i> has been added to your collection`)
  $("#create-album input").val("")
  $("#albums-display").html("")
  $(".collapse").collapse("hide")
}

const createAlbumFailure = function () {
  $("#message").text("Album creation failed")
  $("#create-album input").val("")

}

// GET ALL ALBUMS
const getAlbumsSuccess = function (response) {
  if (response.albums.length === 0){
    $("#message").text("Your collection is currently empty.")
  } else {
    $("#message").text("This is your current collection")
    // clear anything currently shown
    $("#albums-display").html("")
    const showAlbumsHtml = albumsTemplate({albums: response.albums})
    $("#albums-display").append(showAlbumsHtml)
  }
}

const getAlbumsFailure = function () {
  $("#message").text("Index request failed.")
}

// DELETE AN ALBUM
const deleteAlbumSuccess = function (response) {
  $("#message").text("Farewell, album!")
  $("#albums-display").html("")
  const showAlbumsHtml = albumsTemplate({albums: response.albums})
  $("#albums-display").append(showAlbumsHtml)
}

const deleteAlbumFailure = function () {
  $("#message").text("Failed to delete the album.")
}

// UPDATE AN ALBUM
const updateAlbumSuccess = function (response) {
  $("#message").text("Album has been updated")
  $("#albums-display").html("")
  const showAlbumsHtml = albumsTemplate({albums: response.albums})
  $("#albums-display").append(showAlbumsHtml)
  $(".modal-backdrop").remove()
}

const updateAlbumFailure = function () {
  $("#message").text("Failed to update the album.")
}

module.exports = {
  createAlbumSuccess,
  createAlbumFailure,
  getAlbumsSuccess,
  getAlbumsFailure,
  deleteAlbumSuccess,
  deleteAlbumFailure,
  updateAlbumSuccess,
  updateAlbumFailure
}
