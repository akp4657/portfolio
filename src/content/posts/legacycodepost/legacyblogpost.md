---
title: Pro Wrestling Taught Me How to Debug Legacy Code
published: 2025-06-12
image: ./legacypost.jpg
description: When the code hits harder than a clothesline...
tags: [Blog, Culture, Debugging, Lessons]
category: Blog
draft: false
---
*No, seriously*! In my free time for the past few years, I've been a professional wrestler. While that has slowly been waning in favor of building my portfolio with exciting projects, I'll never forget the time I stepped into the ring as a brand new student. The ring itself was painful, moving around the ropes was awkward, and it felt like I could get lost just trying to walk from corner to corner. If you think about it, that really *is* a lot like debugging legacy code, and I want to share a small snippet of my thought process as to why.

## Every match has a script… until it doesn't
If you know anything about pro wrestling, you'll know that the action in the ring is scripted. Well… not *exactly* scripted, but we do have a plan going into the ring. However, in wrestling, something will go wrong in every single match. People can forget the plan, don't execute a move correctly, say or do the wrong thing, or (knock on wood) even get hurt. 

Just like with legacy systems, documentation may say one thing, but the reality often disagrees. Many times when working with legacy code, the person who documented is most likely no longer around to explain thoroughly. In which case, it's up to us to think on our feet, adapt, and most importantly, communicate with available teammates. Communication in wrestling is paramount to a successful match. Debugging is the same way. Often times, simply brainstorming or rubber ducking can help solve the bug or at least put progress towards the finish line.

## Respect your opponent
One of wrestling's golden rules: *never bury your opponent*. If you trash their credibility and then beat them… congrats, you just beat a nobody.

Legacy code deserves the same respect. Someone built it. Maybe under pressure, or with less tooling than we have now. Don't dismiss it - learn from it. That mindset helps you debug smarter and refactor cleaner. Be sure to approach these systems with respect, curiosity, and a willingness to understand before refactoring.

**Quick Tip**: Pretty much every developer thinks someone else's code on the same system is inferior. Don't be this type of developer. Always stay curious!

## Take the bump so future devs don't have to
In wrestling, taking bumps properly not only protects yourself but can also protect your opponent depending on the move. In code, cleaning up these systems or adding good documentation/tests saves the next dev from the same pain you went through. Remember, code you write professionally will very likely be there for quite a few years to come. So, fixing old legacy code with clean, well-documented code will save headaches for future devs in the long run. Just like taking solid bumps will save you and your opponent's body in the long run while you're in the sport of professional wrestling.

## My experience with the "script" going wrong…
I want to end this little post by detailing an experience I recently had at SandBox Union. The main issue revolved around timezones (lovely) being misaligned from what were expecting in the database. I had not worked on this system before, but was tasked to take a look to potentially refactor. The script, so to speak, has now been derailed. It's time for me to adapt to something brand new that is, quite literally, time sensitive. 

It took me a few hours to really go through the code and understand each piece. There was not much documentation from the previous developer, and said developer was no longer at the company. Even so, I wanted to understand their thought process even if the refactor wouldn't include the legacy code. Curiosity and understanding are keys to success in any field. Always respect your opponent, and in turn, respect the codebase.

Finally, after understanding the process, I decided to refactor the system. The system essentially worked perfectly afterwards, and I was sure to document every decision I made to ensure future devs on this project wouldn't deal with the same frustrating few hours I had to deal with deciphering the code. I made sure to take the clean, solid bump so that everyone will be a little better off whenever the next hiccup comes. In the end, the system ran cleanly. But more importantly, it was now documented and safe for whoever enters the ring next. In wrestling, that's how you earn trust. In code, that's how you build legacy - the good kind.


