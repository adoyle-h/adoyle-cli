# adoyle-cli
![Node Version][Node Version Image]
[![Npm Package Version][Npm Package Version Image]][Npm Package Version LINK]
[![License][License Image]][License LINK]
![NodeJS Package Dependencies][NodeJS Package Dependencies Link]
[![Build Status][Build Status Image]][Build Status Link]
[![Code Climate][Code Climate Image]][Code Climate Link]
[![Test Coverage][Test Coverage Image]][Test Coverage Link]

A CLI for personal tasks, which implemented with NodeJS.

## TOC

<!-- MarkdownTOC GFM -->

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Auto-Completion](#auto-completion)
    - [If you are using bash](#if-you-are-using-bash)
    - [If you are using zsh](#if-you-are-using-zsh)
    - [If you are using fish](#if-you-are-using-fish)
- [Versioning](#versioning)
- [Copyright and License](#copyright-and-license)

<!-- /MarkdownTOC -->


<a name="installation"></a>
## Installation

`npm install -g adoyle-cli`

<a name="quick-start"></a>
## Quick Start

1. Installation
2. Set [Auto-Completion](#auto-completion)
3. Just invoke `adoyle` in shell.

<a name="configuration"></a>
## Configuration

Some commands need configuration. You should create a file named `~/.adoyle-cli.rc`
with non-strict JSON syntax implemented by [JSON5](https://github.com/json5/json5).

```
{
    github-token: '...',
    dirs: {
    }
}
```

<a name="auto-completion"></a>
## Auto-Completion

### If you are using bash

```bash
# For bash
source <(adoyle completion bash)

# or add it to your .bashrc to make it persist
echo "source <(adoyle completion bash)" >> ~/.bashrc \
&& source ~/.bashrc
```

### If you are using zsh

```bash
# For zsh
source <(adoyle completion zsh)

# or add it to your .zshrc to make it persist
echo "source <(adoyle completion zsh)" >> ~/.zshrc \
&& source ~/.zshrc
```

### If you are using fish

```bash
# For fish
source <(adoyle completion fish)

# or add it to your config.fish to make it persist
echo "source <(adoyle completion fish)" >> ~/.config/fish/config.fish \
&& source ~/.config/fish/config.fish
```

https://github.com/mattallty/Caporal.js#shell-auto-completion

<a name="versioning"></a>
## Versioning

The versioning follows the rules of SemVer 2.0.0.

**BUT**, anything may have **BREAKING CHANGES** at **ANY TIME** when major version is zero (0.y.z), which is for initial development and the public API should be considered unstable.

For more information on SemVer, please visit http://semver.org/.

<a name="copyright-and-license"></a>
## Copyright and License

Copyright (c) 2017-2018 ADoyle. The project is licensed under the **Apache License Version 2.0**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

See the [NOTICE][] file distributed with this work for additional information regarding copyright ownership.


<!-- Links -->

[LICENSE]: ./LICENSE
[NOTICE]: ./NOTICE


<!-- links -->

[Node Version Image]: https://img.shields.io/node/v/adoyle-cli.svg
[Npm Package Version Image]: https://img.shields.io/npm/v/adoyle-cli.svg
[Npm Package Version LINK]: https://www.npmjs.com/package/adoyle-cli
[License Image]: https://img.shields.io/npm/l/adoyle-cli.svg
[License LINK]: https://github.com/adoyle-h/adoyle-cli/blob/master/LICENSE
[NodeJS Package Dependencies Link]: https://david-dm.org/adoyle-h/adoyle-cli.svg
[Build Status Image]: https://travis-ci.org/adoyle-h/adoyle-cli.svg?branch=master
[Build Status Link]: https://travis-ci.org/adoyle-h/adoyle-cli
[Code Climate Image]: https://codeclimate.com/github/adoyle-h/adoyle-cli/badges/gpa.svg
[Code Climate Link]: https://codeclimate.com/github/adoyle-h/adoyle-cli
[Test Coverage Image]: https://codeclimate.com/github/adoyle-h/adoyle-cli/badges/coverage.svg
[Test Coverage Link]: https://codeclimate.com/github/adoyle-h/adoyle-cli/coverage
