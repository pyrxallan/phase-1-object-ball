function gameObject() {
    return {
        'home': {
            'teamName': 'Brooklyn Nets',
            'colors': ['Black', 'White'],
            'players': {
                'Alan Anderson': {
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 1
                },
                'Reggie Evans': {
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7
                },
                'Brook Lopez': {
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assists': 10,
                    'steals': 3,
                    'blocks': 15,
                    'slamDunks': 19
                },
                'Mason Plumlee': {
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assists': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5
                },
                'Jason Terry': {
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assists': 2,
                    'steals': 4,
                    'blocks': 11,
                    'slamDunks': 1
                }
            }
        },
        'away': {
            'teamName': 'Charlotte Hornets',
            'colors': ['Turquoise', 'Purple'],
            'players': {
                'Jeff Adrien': {
                    'number': 4,
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assists': 1,
                    'steals': 2,
                    'blocks': 7,
                    'slamDunks': 2
                },
                'Bismak Biyombo': {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assists': 7,
                    'steals': 22,
                    'blocks': 15,
                    'slamDunks': 10
                },
                'DeSagna Diop': {
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5
                },
                'Ben Gordon': {
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assists': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0
                },
                'Kemba Walker': {
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 7,
                    'blocks': 5,
                    'slamDunks': 12
                }
            }
        }
    }
}

// function to return hometeam name
function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

// function to return awayteam name
function awayTeamName() {
    return gameObject()["away"]["teamName"];
}

console.log(awayTeamName());

function numPointsScored (playerName) {
    let object = gameObject();
    let players = {...object.home.players, ...object.away.players};
    return players[playerName].points;
}

function shoeSize (playerName) {
    let object = gameObject();
    let players = {...object.home.players, ...object.away.players};
    return players[playerName].shoe;
}

function teamColors (teamName) {
    return gameObject().home.teamName === teamName ? gameObject().home.colors : gameObject().away.colors;
}

function teamNames () {
    return [gameObject().home.teamName, gameObject().away.teamName];
}

function playerNumbers (teamName) {
    let object = gameObject();
    let teamObj = object.home.teamName === teamName ? object.home : object.away;
    let players = teamObj.players;
    let playerNumbers = [];
    for (let player in players) {
        playerNumbers.push(players[player].number);
    }
    return playerNumbers;
}

function playerStats (playername) {
    let object = gameObject();
    let players = {...object.home.players, ...object.away.players};
    return players[playername];
}


function mostPointsScored () {
    let object = gameObject();
    let players = {...object.home.players, ...object.away.players};
    let maxPoints = 0;
    let topScorer = '';
    for (let player in players) {
        if (players[player].points > maxPoints) {
            maxPoints = players[player].points;
            topScorer = player;
        }
    }
    return topScorer;
}