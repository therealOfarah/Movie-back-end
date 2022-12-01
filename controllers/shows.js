import {Show} from '../models/show.js'
import { Profile } from "../models/profile.js";
export function saveShow(req,res){
  console.log(req.user)
  Show.create(req.body)
  .then((show)=> {
    Profile.findById(req.user.profile)
    .populate('shows')
    .then(profile => {
      profile.shows.push(show)
      profile.save()
      console.log(profile)
      res.json(show)
    })
  })
}