import fs from 'fs'
import path from 'path'

import express from 'express'

const api = express.Router()


const initialItems = []

api.get('/posts', (req, res) => {
  res.json({
    data: initialItems
  })
})

api.get('/archive', (req, res) => {
  res.json({
    data: [

    ]
  })
})

api.get('/:postpage', (req, res) => {
  res.json({
    data: [

    ]
  })
})

export default api
