import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  original_name: String,
  release_date: String,
  photo:String,
},{
  timestamps: true,
})

const Movie = mongoose.model('Movie', movieSchema)

export { Movie }
