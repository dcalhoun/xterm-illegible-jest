# xterm-illegible-jest

Reverse color mode does not function correctly for [Jest's](https://jestjs.io) log output (facebook/jest#6494) which results in illegible text.

## Details

- Browser and browser version: [hyper](https://github.com/zeit/hyper) 2.1.0-canary.2
- OS version: macOS 10.13.6
- xterm.js version: 3.4.1

### Steps to Reproduce

1.  Install [Hyper](https://hyper.is).
1.  Clone the [reproduction repository](https://github.com/dcalhoun/xterm-illegible-jest).
1.  `yarn install`
1.  `yarn test`

### Expected Result

The Jest log produces legible status and result headers.

<img width="1553" alt="terminal-correct" src="https://user-images.githubusercontent.com/438664/45928921-7ea62600-bf10-11e8-9a03-55a6942f916e.png">

### Actual Result

The Jest log produces illegible status and result headers.

![xterm-incorrect](https://user-images.githubusercontent.com/438664/45928919-7948db80-bf10-11e8-8d8f-fbbc7cfed67c.png)

## Notes

- A Jest maintainer was kind enough to [provide references to the lines producing the headers](https://github.com/facebook/jest/issues/6494#issuecomment-423834843).
