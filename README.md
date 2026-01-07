# Coffee Grinder + Server
## Andrea E! 1/7/26

### Reflection Questions:
After completing this activity, consider the following:

1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?
- You would use res.sendFile when you actually need to a page, or to display the entire page but maybe when you need other kinds of data like when we just need a module we would use res.send.

2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
- The path module is necessary when serving files I would assume to make sure that we could actually get to the new page and that the path would not break. 
3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?
- I would go to my terminal and create another file for menu, and then add another route/path pointing to the new page. 