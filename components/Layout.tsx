/** @jsx jsx */
import {
  html,
} from 'https://deno.land/x/hono@v2.0.2/middleware.ts'

export const Layout = (props: { title: string; children?: any }) => {
  return html` <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${props.title}</title>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css"
        />
      </head>
      <body style="padding: 1em 2em">
        <header>
          <h1>
            <a href="/">Hono Example</a>
          </h1>
        </header>
        <turbo-frame id="main"> ${props.children} </turbo-frame>
        <footer>
          <address>Built with <a href="https://github.com/honojs/hono">Hono</a></address>
        </footer>
      </body>
    </html>`
}
