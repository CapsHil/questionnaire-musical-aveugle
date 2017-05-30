import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'
import { Players } from '../imports/api/players.js'
import { Games } from '../imports/api/games.js'

import './main.html';

let interval = 10
let totalPlayed = 0

Meteor.startup(function () {
	Session.set('timer', 0)
	Session.set('timerDuration', interval)
	startTimer()
});

Template.clock.helpers({
  timer() {
	  return Session.get('timer');
  },
});

Template.body.helpers({
	results: Players.find()
})

Template.selectWinner.events({
	'click .w3-button': function(event) {
		Meteor.call('games.addPoint')
		Meteor.call('players.addPoint', event.target.value)
		Meteor.call('players.updateScoreRate', Games.findOne().points)
	}
})

function startTimer() {
	Session.set('timer', Session.get('timerDuration'))
	setInterval(function () {
		Session.set('timer', Session.get('timer') - 1)
	}, 1000);
}
