Add friends, bet ETH, get tasks done. Introducing:

![(Worldmark)](/docs/1.png)

## Rules
1. Use [**b**(**e****t**]h) to create a house and invite your friends.
2. Create daily, weekly, or monthly tasks by voting in ideas and 
   collaboratively editing them to suit your home.
3. Pool funds for each set of tasks with ETH, get assigned tasks 
   inversely proportional to the total ETH your put in.
4. For each time period, do your assigned tasks and earn ETH for completion.
5. When you complete your tasks, you are then given access to take ETH 
   from roommates by completing their tasks.

## Table of Contents
- [Getting Started](#getting-started) - ([Windows](#windows)/[Mac OS](#mac-os))
- [Installing](#installing)

## Getting Started
### Prerequisites
- [Chocolatey](https://docs.chocolatey.org/en-us/) (Windows) or [Homebrew](https://brew.sh/) (Mac OS)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [IPFS](https://docs.ipfs.io/concepts/)

Clone this repository and navigate to its root, then do the following (based on
your operating system):

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

![(Worldmark)](/docs/2.png)

