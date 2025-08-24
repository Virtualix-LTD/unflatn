# Changelog

All notable changes to this project will be documented in this file according to
[ADR-11].

This project adheres to Semantic Versioning according to [ADR-12].

## [1.0.6] - 2025-08-24

No functional changes. No reason to upgrade from 1.0.5.

### Fixed

- Badges in README.md

## [1.0.5] - 2025-08-23

### Fixed

- Fix prototype pollution in lodash [CVE-2020-8203] by upgrading lodash version.

### Changed

- Use lodash package instead of per-function packages

[CVE-2020-8203]: https://github.com/advisories/GHSA-p6mc-m468-83gw

## [1.0.4] - 2025-08-22

Initial fork from https://github.com/vigour-io/unflatten/

[ADR-11]: ./doc/adr/0011-we-will-keep-a-changelog.md
[ADR-12]: ./doc/adr/0012-we-will-use-semantic-versioning.md

[1.0.6]: https://github.com/Virtualix-LTD/unflatn/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/Virtualix-LTD/unflatn/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/Virtualix-LTD/unflatn/tree/90ff41bc6542eb2147d0bc7cac08eda004f8a0c2
