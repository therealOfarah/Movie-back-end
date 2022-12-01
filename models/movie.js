import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  original_title: String,
  release_date: String,
  poster_path:String,
  overview:String,
},{
  timestamps: true,
})

const Movie = mongoose.model('Movie', movieSchema)

export { Movie }
