import { Meteor } from 'meteor/meteor'
import { Players } from '../imports/api/players.js'
import { Games } from '../imports/api/games.js'

Meteor.startup(() => {
	Players.remove({})
	Games.remove({})
	Players.insert({ playerName: 'Pierre', scoreRate: 0, score: 0, color: 'deep-purple'})
	Players.insert({ playerName: 'Alexis', scoreRate: 0, score: 0, color: 'amber'})
	Players.insert({ playerName: 'Nobody', scoreRate: 0, score: 0, color: 'black'})
	Games.insert({points: 0})
});
