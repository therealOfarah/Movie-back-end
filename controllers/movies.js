import {Movie} from '../models/movie.js'
import { Profile } from "../models/profile.js";
export function saveMovie(req,res){
  console.log(req.user)
  Movie.create(req.body)
  .then((movie)=> {
    Profile.findById(req.user.profile)
    .populate('movies')
    .then(profile => {
      profile.movies.push(movie)
      profile.save()
      res.json(movie)
    })
  })
}