```
  /Home // Code for Home page
  /About // Code for About page
```

Idea for this folder structure is a modular one. 

Each directory contains an entry point into page that routed to configured in `routes.jsx`.

Custom hooks and things that want to be used internal to the module can be placed in that directory.

If found that logic is repeated, extract to some shared module.
