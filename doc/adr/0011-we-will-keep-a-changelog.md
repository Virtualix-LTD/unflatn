# 11. We will keep a changelog

Date: 2025-08-24

## Status

Accepted

## Context
This is a public project and we need a quick way to inform users of changes
between versions.

## Decision
We will keep a changelog based on [Keep a Changelog][1]

The first version to be documented will be 1.0.4, as it is the version that we
forked.

Non-functional changes should not be documented, such as changes to the build
system etc. unless they meaningfully impact the published package.
For example, adding a cache to GH actions should not be documented in the
changelog, but adding build provenance should.

It follows that changes to `devDependencies` would not normally be documented.

## Consequences
The changelog will need to be manually updated.
End-users can read the changelog to see significant changes between versions.

[1]: https://keepachangelog.com/en/1.1.0/
