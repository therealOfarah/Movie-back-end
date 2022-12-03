import { Profile } from '../models/profile.js'
import { Movie } from '../models/movie.js'
import { v2 as cloudinary } from 'cloudinary'
import { Show } from '../models/show.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

export function show(req, res) {
  Profile.findById(req.params.id)
  .populate({path: 'movies'})
  .populate('shows')
  .then(profile => {
    res.json(profile)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
export function deleteMovie(req,res){
  Movie.findById(req.params.id)
  .then(movie=> {
    Profile.findById(req.user.profile)
    .then(profile => {
      profile.movies.remove(movie)
      profile.save()
      res.json(movie)
    })
  })
}
export function deleteShow(req,res){
  Show.findById(req.params.id)
  .then(show=> {
    Profile.findById(req.user.profile)
    .then(profile => {
      profile.shows.remove(show)
      profile.save()
      res.json(show)
    })
  })
}
export { index, addPhoto }
