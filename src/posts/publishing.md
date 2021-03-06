---
path: "/publishing"
date: "2018-02-25T23:03:00+00:00"
title: "[Meta] How to Publish"
---

Welcome to Bits, [GUMAD's](http://gumad.club/) tech blog. "Bits" is designed for small articles that explain complicated tech topics. The idea is to be [axios](https://www.axios.com/) but instead of talking about capitalism we talk about [CAP theorem.](https://en.wikipedia.org/wiki/CAP_theorem)

## Articles must be less than 150 words.

Brevity breeds quality. Code doesn't count. We may increase the size in the future.

## Write your articles in markdown, send a PR to submit.

[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is Github-friendly and gets converted into HTML by our site.

If you'd like to submit an article, add a `.md` document to `src/posts`. It must have a header at the top in the form:

```
---
path: "/my-article-title"
date: "2017-07-12T17:12:33.962Z"
title: "My Article Title"
author: "John Doe"
author_link: "http://example.com"
---
```

`author_link` is optional.

Dates must be in [ISO 8601 format](http://www.timestampgenerator.com/). We will hopefully make that part easier.

When you're finished, send a [pull request](https://help.github.com/articles/creating-a-pull-request/) to [the repo.](https://github.com/gu-app-club/blog)
