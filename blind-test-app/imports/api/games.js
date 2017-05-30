import { Mongo } from 'meteor/mongo'

export const Games = new Mongo.Collection('games')

Meteor.methods({
	'games.addPoint'() {
		let id = Games.findOne()._id
		let previousScore = Games.findOne().points
		Games.update(id, { $set: {points: previousScore+1}})
	}
})