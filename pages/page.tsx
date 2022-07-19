/** @jsx jsx */
import {
  jsx,
} from 'https://deno.land/x/hono@v2.0.2/middleware.ts'
import { Layout } from '../components/Layout.tsx'
import type { Post } from '../main.tsx'

export const Page = (props: { post: Post }) => {
  return (
    <Layout title={props.post.title}>
      <title>{props.post.title}</title>
      <main>
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
      </main>
    </Layout>
  )
}
