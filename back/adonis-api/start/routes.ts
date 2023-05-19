/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { prisma } from '../index'
import Application from '@ioc:Adonis/Core/Application'


Route.get('/posts', async ({ response }) => {

  const allPosts = await prisma.posts.findMany()
  if (!allPosts) {
    response.status(404)
  }

  response.status(200).send(allPosts)
})


Route.post('/posts', async ({ request, response }) => {

  const fileImageFile = request.file('image')

  if (fileImageFile) {
    await fileImageFile.move(Application.tmpPath('images'))
  }


  const new_post = await prisma.posts.create({
    data: {
      title: request.body().title,
      email: request.body().email,
      image: '/tmp/images/' + fileImageFile?.clientName,
      description: request.body().description,

    },
  })

  response.status(201).send(new_post)
})