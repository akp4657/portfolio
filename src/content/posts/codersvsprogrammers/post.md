---
title: We Need More Programmers, Less Coders
published: 2025-08-05
image: ./pvc.jpg
description: "An opinion piece on the need for stronger problem solving skills over coding skills."
tags: [Opinion, Programming, DSA]
category: Blog
draft: false
---
At the time of writing this, August 2025, AI has essentially been integrated into many of our daily lives. From work to recreation, AI tooling/assistance is here to stay. At least, it’s here to stay for the foreseeable future. With AI becoming more established in the tech space specifically, it’s time to discuss a paradigm shift that will need to take place for developers to continue to grow: We need more programmers; less coders. For some people, this seems like an odd statement. Aren’t they the same? They’re very similar, but not quite the same. Let me explain the differences as well as why we need to shift our mindset as developers.

# Coder vs Programmer?
I was one of the people who constantly used these terms interchangeably to describe myself and what I do for my career. However, it wasn’t until I became an engineering leader during these past two or three that I discovered I should be calling myself a programmer more than a coder. So, what’s the difference between the two?

Coding involves translating logic into direct syntax in that language. These are the fundamental things every developer learns when learning a new language or starting out in their first term of school or a bootcamp. Often, especially with the pressure of grades/graduating/job prospects, developers at this stage of their dev career are often focused on completion over comprehension. At face value, coding is about assembling the components and following the instructions given from documentation, tutorials, or Stack Overflow.

Conversely, a programmer takes a step above coding. It’s often said, sometimes disparagingly, that senior engineers/managers don’t do the actual work. They don’t code, and to an extent, this is true. The more senior you are in the tech space, the less code you are writing overall. This is because senior developers are becoming more programmers over coders. Being a programmer is about deeply understanding systems, design patterns, optimization, etc. The big picture of the solution rather than the components. Separating yourself as a programmer means prioritizing your problem-solving skills, prioritizing maintainability/scalability/userbase. Concepts that go far beyond the code itself. This of course does not mean that programmers shouldn’t be coders or know how to code. Part of being a programmer is being able to understand the big picture and then acting on that to debug, optimize, and build solutions from scratch.

The industry is currently lagging behind in terms of the paradigm shift happening within. Bootcamps still churn out coders who can get things done quickly for businesses who need quick results and MVPs done as soon as possible. While this is great to get the products out quickly, it stifles the development process of these individuals as AI continues to make a rise in our industry. For example, just a year ago, Devin threatened to completely eliminate these types of “code-only” developers. While Devin ultimately didn’t lead to the seismic shift that was promised, it doesn’t mean that a similar LLM won’t be released in the near future. Which means that we, as developers, need to focus on becoming the strongest programmers possible.

# How to Be a Better Programmer
So, how do we become stronger programmers? As written previously, programming is all about understanding the fundamental concepts of not only the code itself, but the problem at large. We need to build and nurture our programming mindset. Here are some ideas:

## Think in Systems, Not Components
Senior developers, especially at FAANG companies, often think about the problems faced in terms of the high-level system design required with regard to their team and tech stack. Why is this important? Because this is how long-term safety can be achieved. When thinking about the immediate components/code that need to be written first, often times, the right answer will be found. However, the solution may not be optimized or will cause issued in the long-term since it was primarily written in the short-term. This isn’t always the case, but it’s best to not go with your first solution as the final solution.

## Understand the “Why?”, Not Just the “How?”
This is similar to what I talked about in my [Pro Wrestling Taught Me How to Debug Legacy Code](https://www.anthonypichardo.dev/posts/legacycodeblogpost/post/) post, where I urged developers to always remain curious! This also relates to becoming a stronger programmer. With any code you see whether it’s from a co-worker, Stack Overflow, your own code from years ago, or even ChatGPT. Always, always, always try to understand why the code is there before getting deeper into the code’s execution. You may find that some areas could be completely refactored into something simpler or even removed entirely. Some example questions would be: 
- “Why is this function needed compared to, say, an open-source package that could be more readable for future developers? Should we make a package/microservice for this function?” 
- “Why would we need filtering on the client side instead of server side? Are there DB optimizations that need to be made if it’s due to speed?” 
- “Why is this function being called so often?” 

## Study CS Concepts: DSA
This is definitely my least favorite part of the process, as I’ve found that many of the complex DSA algorithms won’t be coded from scratch as they are usually found within the language’s compiler or native functions already. However, part of being the strongest programmer you can be is deeply understanding concepts like Big O complexity, different sorting algorithms, and search algorithms. While they may not always be built from scratch by you or your team, understanding what’s going on under the hood can help drive major decisions such as what tech stack would be optimal for the solution needed based.

## Read Code, Not Just Write It
This can be pretty odd for some folks, it was odd for me at first. Reading code, either your own or others’, can help tremendously in terms of comprehension. There are many online videos reviewing production level code for old games/old products (my favorite has been [DOOM 3’s source code review](https://www.youtube.com/watch?v=C_ymp74yobE)). These reviews and this type of content is a much more entertaining way, in my opinion, to read production level code and gain insight into how these systems work. Bonus points if the code review isn’t in your main language.
