/** @jsx jsx */
import { serve } from 'https://deno.land/std@0.148.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v2.0.2/mod.ts'
import {
  logger,
  poweredBy,
  jsx,
  serveStatic
} from 'https://deno.land/x/hono@v2.0.2/middleware.ts'
import { Top } from './pages/top.tsx'
import { Page } from './pages/page.tsx'

const app = new Hono()

app.use('*', logger(), poweredBy())
app.use('/static/*', serveStatic({root: './'}))

// Model
export type Post = {
  id: string
  title: string
  body: string
}

const posts: Post[] = [
  { id: '1', title: 'Good Morning', body: 'Let us eat breakfast' },
  { id: '2', title: 'Good Afternoon', body: 'Let us eat Lunch' },
  { id: '3', title: 'Good Evening', body: 'Let us eat Dinner' },
  { id: '4', title: 'Good Night', body: 'Let us drink Beer' },
  { id: '5', title: 'こんにちは', body: '昼からビールを飲みます' },
]

// Logic
const getPosts = () => posts

const getPost = (id: string) => {
  return posts.find((post) => post.id == id)
}

// Controller
app.get('/', (c) => {
  const posts = getPosts()
  return c.html(<Top posts={posts} />)
})

app.get('/post/:id{[0-9]+}', (c) => {
  const id = c.req.param('id')
  const post = getPost(id)
  if (!post) return c.notFound()
  return c.html(<Page post={post} />)
})

serve(app.fetch)
