---
title: How I manage JS package versions
description: A rundown of the tools I use to manage JavaScript package managers, dependency versions, updates, and version bumping in my projects.
pubDate: 2026-05-08
---

## Package manager

[pnpm](https://pnpm.io/) is my default Node.js package manager. It is really fast and secure. The main reason I highly recommend it is that it can mitigate supply chain attacks. This is critical, as the frequency of supply-chain attacks is quite high these days.

## Too many package managers 😵‍💫

The most annoying problem when developing JS projects is the inconsistency of the package manager. Some projects use pnpm, the other uses bun, etc. It’ll be very convenient if we have a command that detects which package manager the project is using and runs the install command following that package manager. Fortunately, we have 2 tools that can solve this problem: [ni](https://github.com/antfu-collective/ni) by Anthony Fu and [Vite+](https://viteplus.dev/) by VoidZero.

## Categorize dependencies

pnpm has a feature called [catalogs](https://pnpm.io/catalogs), which allows me to share dependency versions across packages. This is really useful for a monorepo. Alternatively, I can use it for a single package to gain some [benefits](https://antfu.me/posts/categorize-deps) that Anthony Fu has already explained clearly in his post.

## Update packages

[taze](https://github.com/antfu-collective/taze) allows me to customize how I want it to update my packages: major, minor, or patch only or I can even use Regex to indicate which packages I want it to update.

## Bump package version

[bumpp](https://github.com/antfu-collective/bumpp) is a CLI that automatically updates the version property in my `package.json`, I can also ask it to create a commit and push it automatically.
