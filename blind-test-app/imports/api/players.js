import { Mongo } from 'meteor/mongo'

export const Players = new Mongo.Collection('players')

Meteor.methods({
	'players.addPoint'(id) {
		let previousScore = Players.find({_id: id}).fetch()[0].score
		Players.update(id, { $set: {score: previousScore+1}})
	},
	'players.updateScoreRate'(totalPlayed) {
		Players.find().forEach(function(player) {
			let score = Players.find({_id: player._id}).fetch()[0].score
			let newScoreRate = Math.round(((score/totalPlayed)*100))
			Players.update(player._id, { $set: {scoreRate: newScoreRate}})
		})
	}
})