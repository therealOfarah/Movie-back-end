import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  movies:[{ type: Schema.Types.ObjectId, ref: 'Movie' }],
  shows:[{ type: Schema.Types.ObjectId, ref: 'Show' }]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
