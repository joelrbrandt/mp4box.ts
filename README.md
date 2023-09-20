# mp4box.ts

This package contains a TypeScript wrapper for mp4box.js

## License

The code in this package is licensed under the 3-Clause BSD License, also known
as the "New BSD License" or "Modified BSD License".

This package incorporates code from
[mp4box.js](https://github.com/gpac/mp4box.js/), which is also licensed under
the 3-Clause BSD License. The license for mp4box.js is included here in
[LICENSE.mp4box.js.txt](LICENSE.mp4box.js.txt)

## Updating to a new SHA in mp4box.js

1. run `git submodule update --init --recursive`

2. go into the [`mp4box.js`](mp4box.js/) directory and use git to check out the
   SHA you want (e.g., use `git pull`, etc.)

3. go back to the root directory and run `./update.sh`

4. go into the [`mp4box.ts`](mp4box.ts/) directory and make sure everything
   looks good.

5. increment the version number in the package.json

6. run `npm publish`
