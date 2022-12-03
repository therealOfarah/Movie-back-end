import {Movie} from '../models/movie.js'
import { Profile } from "../models/profile.js";
export function saveMovie(req,res){
  // console.log(req)
  Movie.create(req.body)
  .then((movie)=> {
    Profile.findById(req.user.profile)
    .populate('movies')
    .then(profile => {
      profile.movies.push(movie)
      profile.save()
      console.log(profile)
      res.json(movie)
    })
  })
}