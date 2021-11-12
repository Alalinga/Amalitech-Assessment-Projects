const team={
  _players:[{
    firstName: 'Alalinga',
    lastName: 'Mubarik',
    age: 26
  },
  {
    firstName: 'Jamal',
  lastName: 'Mohammed',
  age: 30
  },
  {
    firstName: 'okooo',
  lastName: 'lakz',
  age: 23
  }],
  _games:[
    {
  opponent: 'Hearts',
  teamPoints: 42,
  opponentPoints: 27
},
{
  opponent: 'Kotako',
  teamPoints: 42,
  opponentPoints: 27
},
{
  opponent: 'chelsea',
  teamPoints: 42,
  opponentPoints: 27
}
  ],

  get games(){
    return this._games
  },
  get players(){
    return this._players
  },

  addPlayer(firstName,lastName,age){
      let player={
        firstName,
        lastName,
        age
      }
    return this._players.push(player)
  },
  addGame(opponent,teamPoints,opponentPoints){
      let game={
        opponent,
        teamPoints,
        opponentPoints
      }
    return this._games.push(game)
  }
}

//adding Players
team.addPlayer('Steph', 'Curry' , 28)
team.addPlayer('Lisa', 'Leslie' , 44)
team.addPlayer('Bugs', 'Bunny' , 76)

//adding games
team.addGame('Black Stars', 34 , 28)
team.addGame('Chelsea',33 , 44)
team.addGame('Hearts', 24 , 76)

console.log(team.players)

