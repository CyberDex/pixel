# Pixil

[![Codecov Coverage](https://img.shields.io/codecov/c/github/CyberDex/Pixil/master.svg?style=flat-square)](https://codecov.io/gh/CyberDex/Pixil/)

Wrapper engine for [pixi.js](https://github.com/pixijs/pixi.js)

Documentation can be found [here](https://cyberdex.github.io/pixil/)

## Usage

```
npm i pixil
```

```javascript
import { App, View, Label, Button } from 'pixil'

const app = new App({ antialias: true })

document.body.appendChild(app.view)

const splash = new View(0, 0)
const game = new View()

app.views.add('SPLASH', splash)
app.views.add('GAME', game)

const startButton = new Button({ text: 'Press me', width: 250, height: 60, radius: 30 })
splash.addChild(startButton)
startButton.onClick(() => {
	app.views.hide('SPLASH')
	app.views.show('GAME')
})

const gameText = new Label('It Works!!!', { fill: '#ffffff' }, 50, 50)
game.addChild(gameText)
```
