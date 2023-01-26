import cors from "cors"
import express from "express"
const resinPrice = 325

const app = express()
app.use(cors())
app.use(express.json())
app.post("/", (req, res) => {
  const { quantity, sanded, painted, cupom, volume } = req.body
  const custo = quantity * ((volume * resinPrice) / 1000)
  res.send({ custo })
})

app.listen(3001, () => {
  console.log("Listening on port 3001!")
})