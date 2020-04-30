# Pixil
Wrapper engine for [pixi.js](https://github.com/pixijs/pixi.js)

Documentation can be found [here](https://cyberdex.github.io/pixil/)

## Usage
```
npm i pixil
```

```javascript
import { App, View, Label, Button } from  'pixil'

const app = new  App({ antialias:  true })
document.body.appendChild(app.view)
const splash = new  View(0, 0)
const game = new  View()

app.scenes.add("SPLASH", splash)
app.scenes.add("GAME", game)
  
const startButton = new  Button({text: "Start Game"})
splash.addChild(startButton)
startButton.onClick(() => {
  app.scenes.hide("SPLASH")
  app.scenes.show("GAME")
})

const gameText = new  Label("GamePlay", { fill:  "#ffffff" }, 50, 50)
game.addChild(gameText)
```
