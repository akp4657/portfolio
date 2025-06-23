---
title: KISS - Keep It Simple, Silly!
published: 2025-06-25
image: ./kiss.jpg
description: "A Case Study in Rebuilding the ESW Website"
tags: [Blog, ESW, Lessons]
category: Blog
draft: false
---
Recently, I was able to complete and launch the [website relaunch](https://www.anthonypichardo.dev/posts/esw/post/) for Empire State Wrestling (ESW). ESW is the largest independent wrestling promotion in upstate New York. However, despite being the largest, their website was lacking in numerous ways. From broken links, outdated information/tickets, to just being an outdated web design. ESW was in desperate need of a complete overhaul of their website to not only serve as a storage for championship history and roster information, but to also allow users to quickly and easily access tickets for the next show - ESW's primary revenue source.

![image Old ESW](./eswold.png)

When starting this project, my primary focus was on what the user would ultimately be visiting the site for. My conclusion was that the average user would be visiting the site for one purpose: To be redirected on where to buy the tickets. This is where the KISS principle came to the forefront of this project. The reworked site would need to be as streamlined as possible to serve the primary purpose while also ensuring the site can be easily maintained even if I'm not available.

## KISS Approach
The ESW site now is streamlined as much as possible while maintaining performance and designed. It's built using an only frontend stack: Pug, VanillaJS, and CSS. Datastores are simple JSON files, there are no frameworks used other than the Bootstrap wireframe. No bloat, no problems. However, this is not something I would have done even a few years ago. I, along with most other developers at my experience level at the time, would likely have implemented a simple backend with Firebase or MongoDB as the datastore, NodeJS hooked to Angular/Vue/React, and needed to launch on Render, Heroku, or another cloud platform because that is the way we were taught. While these may be effective for most, if not all, solutions… It doesn't necessarily mean it's the best.

With B2B software at this scale, I think the best solution is one that serves both the business's userbase as well as the business itself. I could have implemented a backend to ESW, but that would add bloat and costs to the website where the primary use of said site is to redirect to buy a ticket. When building a product, it's always important to recognize what the end user will be primarily using the site for.

The best example I can think of this methodology is Google.com's design. There are quite a few features users are able to utilize on the page, but the most prominent feature is the search bar. Of course, that's because 99% of users navigating to google.com are there to use the search feature. While this example is just visual design, it should be taken into account in software design as well.

## Benefits of KISS and ESW
Beyond considering the userbase when building a B2B product, you must also be aware that your client will potentially be using the codebase as well. The decision to keep ESW as simple as possible was also due to the idea that I could potentially not be available to work on the website as much as needed. In which case, someone else who could potentially have little to no development experience, would need to make adjustments. By keeping ESW so minimal, it makes the experience of developing for it without prior knowledge of the codebase simple.

I've seen many internal products forego simplicity due to the assumption that employees should have the best understanding of the product anyway. However, this approach fails to factor in that new employees will need to be onboarded, current employees may often fight with the product more than the problem, and that foregoing simplicity can often lead to performance issues down the line depending on how much unnecessary data/visualizations are present on the application. Remember: KISS! Be mindful of what your clients will eventually be using the codebase for.

At the end of the day, the ESW relaunch wasn't just about creating a modern website - it was about solving the right problem in the most efficient way possible. The KISS principle served as the north star throughout development, reminding me that good software doesn't always need to be complicated to be effective. By stripping out unnecessary layers and focusing on usability, performance, and long-term maintainability, I was able to deliver something that works for both the fans and the folks behind the scenes. Whether you're building for wrestling fans or enterprise users, simplicity scales - so don't be afraid to **Keep It Simple, Silly**!