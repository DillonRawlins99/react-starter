Folder structure looks like this:

```
  /Home // Code for Home page
  /About // Code for About page
```

Idea for this folder structure is a modular one.

Each directory contains an entry point into page that routed to configured in `routes.jsx`.

Custom hooks and things used internal to a module can be placed in that directory.

If found that logic is repeated, extract to some shared module.
