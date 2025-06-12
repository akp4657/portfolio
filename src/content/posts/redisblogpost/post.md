---
title: Redis Caching for Faster Queries
published: 2024-09-19
image: ./redispost.webp
description: Blog post from SandBox Union about Redis Caching
tags: [Blog, Redis, SQL, Sequelize]
category: Blog
draft: false
---

This post was originally posted on [SandBox Union's blog](https://sandboxunion.com/redis-caching-for-faster-queries/), written by me on September 29, 2022.

So, sometimes we have development problems—we run into what is a significant hurdle for any database: As the amount of data grows, how can we ensure that our queries are executing as fast as possible? This problem gets exacerbated as we begin to use relational data and try to return said relations. Eventually, one may run into a scenario where they are not only querying thousands of rows from one table, but then thousands of rows from a related table, and then another thousand rows from another corresponding table, and so on. 

## Why do queries slow down when there’s a lot of data? Shouldn’t this be easy for the DB?

It is easy for the DB to fetch the data. The problem is when we use our ORM (Object–Relational Mapping tool) of choice, in this case, Sequelize, then things slow down considerably when we have to-Many (:M) relationships relating to each other. Having :M relations in the :M includes our query results in duplicate rows in our returned data. A way to think about it is this: 

Say we have a bunch of students in a database, and we want to get a list of the students’ names, classes, and projects. Students can be in multiple classes, and there can be numerous projects in each class. So, it’s perfectly valid to list a student’s name three times for each student: Student A, Student A in Class A, and Student A in Class A, who is assigned Project A. However, this is redundant. We only need to return the student once; the rest of their data can be below them. This elimination of redundancy is normally what Sequelize would do for us.

So, Sequelize spends a lot of time deduplicating and putting the data in our desired format. Very nice of Sequelize to do, but it slows down tremendously when it has to sift through thousands of rows and deduplicate thousands of times. This issue was happening to us in a few of our calls. It was severe enough to cause a GET query to take, on average, a little over 30 seconds to complete. Many of the attempted solutions fell short, as the fundamental problem was the deduplication from the :M relationships. It was getting to the point where we were about to re-write our frontend and backend—until we tried Redis caching. 

## What is Redis Caching?

Before we get into Redis caching, what is Redis? Redis is, by their official definition, “The open source, in-memory data store used by millions of developers as a database, cache, streaming engine, and message broker.” Essentially, Redis is another DB focused on and known for its fast performance. However, what’s important to us and this problem is its caching capability. Redis provides a speedy solution to access large datasets by caching the results of a large query into the Redis DB. Redis removes the deduplication issue entirely, as we now get the results from the Redis instance instead of our primary SQL DB on each call. 

## How to Implement Redis?

Redis caching is surprisingly simple to implement, especially starting locally. The documentation is well written, and the process is intuitive in our Node.js environment. After the installation in node and on the machine, the rest is just using redisClient.set() to set your data into the database at a specific key value. We cache on POST, PUT, and DELETE in the background after the data gets sent back to the frontend. On GET calls, we simply need to use the redisClient.get() to get the cached data at the specified key. The result is an extremely fast get query due to no deduplication or formatting required on Sequelizes part. 

## What are the Actual Differences in Speed? 

Well, as I said before, some of our queries took about 30 seconds or more to complete for the user. Even for our smaller DBs, with fewer than one thousand rows, the calls were taking about 550ms to complete. Half a second seems minuscule, but with a dataset comparatively small, it should be less than 120ms at its worst. So, after implementing Redis caching, the calls went from around 500ms to a consistent 50ms or less—a speed increase of 10x. The most significant change was when we pushed this change into production, where the calls took 30 seconds on average. With our new implementation, it was down to a consistent 220ms! 30000+ms to 220ms for a dataset of thousands of documents with a few :M relations is a massive difference—which everyone has noticed. So, the next time your queries are too slow, and you’re at your wit’s end with whatever ORM, consider looking at Redis caching.


