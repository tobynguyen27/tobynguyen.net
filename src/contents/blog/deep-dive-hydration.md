---
title: Deep dive into Hydration
description: A comprehensive exploration of hydration in web development
pubDate: 2026-04-26
---

Hydration, we have been hearing it a lot, especially when meta-framework and server-side rendering are the standard in frontend development.

Before going deeper, we need to understand some basic rendering strategies first. Understanding these will help us understand the problem that hydration is solving

## Client-side rendering (CSR)

Client-side rendering is the process of building UI in the client's browser. The server sends to the browser an empty HTML shell and a JavaScript bundle containing the instructions to build our app. When the app gets rendered, it becomes a single-page application with a smooth user experience. However, CSR has a critical drawback: it can take a few seconds to download the JavaScript bundle and build the UI in the client browser; during this time, the website is unavailable, so the user sees a blank page. The more features your website has, the longer it takes to download and build.

Furthermore, beyond the two factors mentioned above, CSR has additional trade-offs worth noting. On the positive side, it is low cost, as most popular cloud platforms provide a free plan for hosting a CSR application. On the negative side, it suffers from a bad SEO score, since our website needs to download the JS bundle to build the UI; however, not all search engines execute JS, but when they do, they usually do so with many limitations.

## Server-side rendering (SSR)

Server-side rendering is the process of building UI on the server. The HTML is computed on the server and sent to the client. The benefit of SSR is that when the browser receives the HTML from the server, the end user sees the application instantly. However, the main drawback of SSR is that the HTML returned by the server is static, so there is no JS interactivity. This is when Hydration comes into play

When computed HTML reaches the browser, the server sends many JavaScript files, and once they arrive, the hydration process starts. These JS files get executed: the app gets rebuilt again on the client: event listeners get registered, and app states get restored. When these processes finish, the application is hydrated.

SSR and hydration only happens once, when the user navigates to that page. When the application is hydrating, the website is completely non-interactive, even though it seems like it.

## Hydration mismatch

JS files get executed twice (server and client). In some situations, this leads us to a hydration mismatch. For example:

```tsx
export default function Home() {
    const randomValue = Math.random()

    return (
        <p>{randomValue}</p>
    )
}
```

The `Math.random()` function will be executed twice, generate a random value on the server and a different random value on the client, so when the hydration process starts, React will detect that the HTML generated on the server is different from the HTML generated on the client, and it will throw a hydration mismatch error.

However, we can avoid this error by using the `useEffect` hook to generate the random value only on the client only:

```tsx
import { useEffect, useState } from 'react'

export default function Home() {
    const [randomValue, setRandomValue] = useState(undefined)

    useEffect(() => {
        setRandomValue(Math.random())
    }, [])

    return (
        <p>{randomValue}</p>
    )
}
```
