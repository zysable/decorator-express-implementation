import './controllers/LoginController'
import './controllers/RootController'
import { Server } from './App'

const app = Server.getInstance()

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
