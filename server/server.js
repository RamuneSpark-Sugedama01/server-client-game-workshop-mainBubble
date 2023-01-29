// =========== 初期設定開始 ============= //
//require = モジュールの読込（多分編集✕）
const _ = require("lodash")
const express = require("express")
const http = require('http')

const app = express()
const server = http.createServer(app)

const { Server } = require("socket.io")
const config = require('./config.js')
const io = new Server(server, { cors: { origin: '*', credentials: true }})
const Database = require('nedb')

//const a = {} は連想配列（ハッシュ）であることを示す
const db = {}

//連想配列変数dbに色々入れてる
db.game = new Database({ filename: 'game.db', autoload: true });
db.game.loadDatabase()
db.team = new Database({ filename: 'team.db', autoload: true })
db.team.loadDatabase()

// =========== 連想配列チュートリアル ============= //
/*
//連想配列の定義
let player =｛name: "Santos", team: "Antlers"};

//連想配列の代入
let a = player.team; //変数aに"Antlers"が代入される
*/
// =========== 初期設定終了 ============= //



//何か送ってる
const sendCurrentGame = () => {
  db.game.find({}, (err, docs) => {
    io.sockets.emit('init:game', _.orderBy(docs, ['createdAt'], ['desc']))
  })
}





const initGame = () => {
  const gameMap = [[null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null]]
  
  const initGameData = {
    map: gameMap,
    createdAt: new Date().getTime(),
    status: 'ready',
  }
  db.game.insert(initGameData)
  sendCurrentGame()
}

const socket = ({io}) => {
  // クライアントからの要求に対する処理
  io.on('connection', (socket) => {
    // 初期接続時
    db.game.find({}, (err, docs) => {
      socket.emit('init:game', _.orderBy(docs, ['createdAt'], ['desc']))
    })
    socket.on('disconnect', (msg) => {
      console.log('user disconnect: ', socket.id)
      //db.team.remove({ id: socket.id }, {}, (err) => {
    //    db.team.find({}, (err, docs) => console.log(docs))
      })
      
    socket.on('level0', (val0) => {
      console.log(val0)
      io.sockets.emit('level0send', val0)
    })
      
          socket.on('level1', (val1) => {
      console.log(val1)
      io.sockets.emit('level1send', val1)
    })
      
          socket.on('level2', (val2) => {
      console.log(val2)
      io.sockets.emit('level2send', val2)
    })
      
          socket.on('level3', (val3) => {
      console.log(val3)
      io.sockets.emit('level3send', val3)
    })
      
          socket.on('level4', (val4) => {
      console.log(val4)
      io.sockets.emit('level4send', val4)
    })
      
                 socket.on('ba0', (baa0) => {
      console.log(baa0)
      io.sockets.emit('ba0send', baa0)
    })
      
           socket.on('ba1', (baa1) => {
      console.log(baa1)
      io.sockets.emit('ba1send', baa1)
    })
      
           socket.on('ba2', (baa2) => {
      console.log(baa2)
      io.sockets.emit('ba2send', baa2)
    })
      
           socket.on('ba3', (baa3) => {
      console.log(baa3)
      io.sockets.emit('ba3send', baa3)
    })
      
           socket.on('ba4', (baa4) => {
      console.log(baa4)
      io.sockets.emit('ba4send', baa4)
    })

    
    // From Game
    socket.on('game:enter', (msg) => {
      const member = {
        id: socket.id,
        team: msg
      }
      db.team.update(member, {$set: { id: socket.id }}, { upsert: true }, (err, numReplaced, upsert) => {
        db.team.find({}, (err, docs) => io.sockets.emit("update:member", docs))
      });
    })
    socket.on('game:answer', (msg) => {
      db.game.find({}, (err, docs) => {
        const currentGame = _.orderBy(docs, ['createdAt'], ['desc'])[0]
        
      })
    })
      
    // From Admin
    socket.on('game:init', () => initGame())
    socket.on('game:start', () => initGame())
    socket.on('game:end', () => initGame())
    socket.on('game:reset', () => db.game.remove({}, { multi: true }, (err, numRemoved) => initGame()))
    socket.on('member:reset', () => db.team.remove({}, { multi: true }, (err, numRemoved) => {
      db.team.find({}, (err, docs) => io.sockets.emit("update:member", docs))
      io.sockets.emit("member:reset")
    }))
  })
}

// サーバー起動
server.listen(config.port, config.host, () => {
  console.log(`Server started on port: ${config.port}`)
  socket({ io })
})

