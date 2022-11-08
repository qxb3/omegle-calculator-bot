import OmegleClient from 'omegle.js'
import calculate from 'calculate-string'

const client = new OmegleClient()

client.on('connected', (commonLikes) => {
  console.log('Connected')

  client.sendMessage('Hello stranger! I am a bot that can do math! Challenge me with exciting math questions!\nExample: 3 + 3')
})

client.on('message', (msg) => {
  console.log(msg)

  const result = calculate(msg)
  if (result === 'NaN')
    client.sendMessage('That is not valid math :(')

  client.sendMessage(`Result: ${result}`)
})

client.on('disconnected', () => {
  console.log('Disconnected')

  client.connect({ topics: ['gaming'] })
})

client.connect({ topics: ['gaming'] })
