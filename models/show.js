import mongoose from 'mongoose'

const Schema = mongoose.Schema

const showSchema = new Schema({
  original_title: String,
  release_date: String,
  poster_path:String,
  overview:String,
},{
  timestamps: true,
})

const Show = mongoose.model('Show', showSchema)

export { Show }
