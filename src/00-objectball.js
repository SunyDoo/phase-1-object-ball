function gameObject(){
    return{
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks:1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks:7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks:15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks:5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks:1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks:2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks:10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks:5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks:0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks:12
                }
            }
        }
    }
}

const game = gameObject()
const homePlayers = game.home.players
const awayPlayers = game.away.players
const allPlayers = players()

function players(){
    return  Object.assign ({}, homePlayers, awayPlayers)
}


function  numPointsScored(playerInput){
    return allPlayers[playerInput].points
}


function homeTeamName(){
    return game.home.teamName
}


function awayTeamName(){
    return game.away.teamName
}


function  shoeSize(playerInput){
    return allPlayers[playerInput].shoe
}

function teamColors(input){
  const colors = []
  if (input === homeTeamName()){
    colors.push (game.home.colors)
  }
  if (input === awayTeamName()){
    colors.push (game.away.colors)
  }
  return colors
}

function teamNames(){
  const teams = []
  teams.push(`${game.home.teamName}, ${game.away.teamName}`)
  return teams
}


function playerNumbers(input){
    const jerseyNumbers = []
    if (input === homeTeamName()){
      for (value in game.home.players){
        jerseyNumbers.push (game.home.players[value].number)
      }
    }
      if (input === awayTeamName()){
     for (value in game.away.players){
        jerseyNumbers.push (game.away.players[value].number)
      }
      }
      return jerseyNumbers
    }
    


function playerStats(input){
    return Object.assign ({}, (allPlayers)[input])
}


function bigShoeRebounds(){
  let biggestShoeSize = 0
  let rebounds = 0
    for (const player in allPlayers){
      if (allPlayers[player].shoe > biggestShoeSize){
        biggestShoeSize = allPlayers[player].shoe
        rebounds = allPlayers[player].rebounds
      }
    }
    return(rebounds)       
}
    

function mostPointsScored(){
  let mostPoints = 0
  let guy; 
      for (const player in allPlayers){
        if (allPlayers[player].points > mostPoints){
          mostPoints = allPlayers[player].points
          guy = player        
        }
      }
    return guy    
}
  

function winningTeam(){
    let homeTeamPoints = teamScore(homePlayers)
    let awayTeamPoints = teamScore(awayPlayers)
    let winningTeam;
    if (homeTeamPoints > awayTeamPoints) {
      winningTeam = game.home.teamName
    }  
    else {
      winningTeam = game.away.teamName
    }
    return winningTeam
  }


  function playerWithLongestName(){
    let playerWithLongestName = ' '
      for (const player in allPlayers){
        if (player.length > playerWithLongestName.length){
          playerWithLongestName = player
        }
      }
      return(playerWithLongestName)       
  }
  


  function doesLongNameStealATon(){
    let playerWithLongestName = ' '
    let mostSteals = ' '
    let steals = 0
      for (const player in allPlayers){
        if (player.length > playerWithLongestName.length){
          playerWithLongestName = player
        }
      }
      for (const player in allPlayers){
          if (allPlayers[player].steals > steals){
            steals = allPlayers[player].steals
            mostSteals = player        
          }
        }
      if (playerWithLongestName === mostSteals) {
        return true
      }
      else {
        return false
      }
  }
  
  doesLongNameStealATon()
         