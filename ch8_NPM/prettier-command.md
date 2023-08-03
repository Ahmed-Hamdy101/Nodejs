## Setup prettier

- copy and past in your `shell`

```npm
        npx i --save-dev prettier
```

- add `.prettierrc`

> touch .prettierrc

> echo {"semi":true,"singleQuote":true} > .prettierc

- add in `package.json` this script inside `scripts`

```json
 "prettier":"npx prettier --write \"**/*.{js,jsx}\""
```

- run this command

> ./prettierrc

- or
> bash prettier.rc