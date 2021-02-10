# rein-boilerplate
A baseline boilerplate for generating an decentralized application with React,
Express, IPFS, and Node.

The app's frontend is built into a single file, served by the backend Smart
contracts can be deployed via Truffle.

## Table of Contents
- [Getting Started](#getting-started) - ([Windows](#windows)/[Mac OS](#mac-os))
- [Installing](#installing)

## Getting Started
### Prerequisites
- [Homebrew](https://brew.sh/) (Mac OS) or [Chocolatey](https://docs.chocolatey.org/en-us/) (Windows)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [IPFS](https://docs.ipfs.io/concepts/)

Clone this repository and navigate to its root, then do the following (based on
your operating systeem):

### Windows
#### Chocolatey
First, download Chocolatey. Follow the instructions [here](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey).

#### Node.js
Then, install the Node.js package.
```
cinst nodejs.install
```

#### npm
Afterward, confirm that `npm` was installed.
```
npm --version
```
Your output should look something like:
```
7.5.0
```

#### IPFS
[Use Chocolatey to install IPFS.](https://docs.ipfs.io/how-to/command-line-quick-start/#initialize-the-repository) 
```
cinst ipfs
```
[Now we need to intalize "the repository,"](https://docs.ipfs.io/how-to/command-line-quick-start/#initialize-the-repository) 
a directory in which IPFS stores all its settings. Do this in your home 
directory.
```
ipfs init
```

### Mac OS
#### Homebrew
First, download Homebrew via the Terminal.
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then, check your system to ensure that Homebrew has installed without problems.
```
brew doctor
```
If not, be sure to follow the fixes that `brew doctor` suggests.

After that, run a fetch for the latest version of Homebrew (just in case).
```
brew update
```

#### Node.js
With Homebrew we can install Node.js. First, install the formula.
```
brew install node
```

Then, run a fetch for the latest version of Node.js (just in case).
```
brew update node
```

#### npm
Confirm that `npm` was installed.
```
npm --version
```
Your output should look something like:
```
7.5.0 
```

#### IPFS
[Use Homebrew to install IPFS.](https://docs.ipfs.io/install/command-line/)
```
brew install ipfs
```

[Now we need to intalize "the repository,"](https://docs.ipfs.io/how-to/command-line-quick-start/#initialize-the-repository) 
a directory in which IPFS stores all its settings. Do this in your home 
directory.
```
ipfs init
```

### Installing
```
npm install
```

## Deployment
## Built With
## Authors
## License
## Acknowledgements

