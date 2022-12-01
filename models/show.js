import mongoose from 'mongoose'

const Schema = mongoose.Schema

const showSchema = new Schema({
  original_name: String,
  release_date: String,
  photo:String,
},{
  timestamps: true,
})

const Show = mongoose.model('Show', showSchema)

export { Show }
