---
title: How I get into Minecraft mod development
description: My journey in developing Minecraft mods and how I learn
pubDate: 2026-05-01
---

I have been playing Minecraft since I was a child. After I enjoyed all the vanilla content, I got bored, so I want to add more content to Minecraft. However, the first time I edited Minecraft content was with an add-on feature (I was using Minecraft Pocket Edition at the time). Then I saw some people on YouTube playing with mods, which is cooler than an addon. Finally, I decided to learn Java, and this is also the main reason that brought me to be a software engineer

In this post, I’ll give advice based on my perspective, so it may not be suitable for everyone, but it will be enough for reference

> I strongly do not recommend that anyone who does not decide to become a programmer make Minecraft mods. Learning programming is not easy; you have to learn a bunch of knowledge that you won't use outside of making mods.

## Choosing a programming language

If you are familiar with JVM languages like Java _and_ Kotlin, I highly recommend you write your mod in Kotlin and to read other mod Java source code. Kotlin fixes most of Java’s famous headaches and is currently recommended by Google for Android app development.

If you have never learned any programming languages or are completely new to programming, I suggest you learn Java. It will take you quite a long time, maybe 3 or 6 months, or maybe up to a year. Being patient is the keyword.

## Mod loaders

At the moment, Minecraft has 3 popular mod loaders: NeoForge, Fabric, and Forge.

| **Minecraft version** | **Mod loader** |
| :-------------------: | :------------: |
|       (,1.20.6]       |     Forge      |
|        [1.14,)        |     Fabric     |
|        [1.21,)        |    NeoForge    |

- Try to use NeoForge as much as possible because they have a strong community.
- I only recommend Forge if you want to make a mod for 1.12.2 or 1.7.10.

## Reading documentation

Mod loaders documentation will never provide enough knowledge for you to make a mod, they are only provide the basic knowledge, so you need to read other people’s source code, which is the best way to learn how to make a mod. You can find many open-source mods on GitHub, and you can also find some mods that are not open-source but have their source code decompiled on GitHub.

You can also join official Discord server of those mod loaders to ask for help, finding teammates, and sharing your mod.
