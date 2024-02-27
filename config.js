/* Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

//Numeros De Los Creadores.
global.owner = [['573223408682', 'CuriosityBot-MD 🍧', true],

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '+573025784384' //Ejemplo: +59309090909
global.confirmCode = '+573025784384'

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Aqui encuentras los nombres del bot
global.packname = 'Milo'
global.author = 'CuriosityBot'
global.wm = '© CuriosityBot-MD'
global.wm2 = 'Curiosity : Bot'
global.azami = 'Azami'
global.cb = 'CuriosityBot'

//Aqui la versión y entre otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '¿Azami ~ Zam?'
global.devnum = '+591 62714296'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
