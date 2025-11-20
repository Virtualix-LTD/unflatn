To update the package version, run the following commands in series

```sh
yarn run cover # generate test coverage files
npm version patch #update as needed
```

If you made a mistake and need to walk back a bad `npm version`, do the following:

1. `git tag` - see the latest tags
2. `git tag --delete <tag>` - delete the bad tag
3. git reset HEAD~
4. Edit `package.json` to undo the version field update
