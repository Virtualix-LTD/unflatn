# 6. We will switch to yarn from npm

Date: 2025-08-22

## Status

Accepted

## Context
Since there is no package-lock.json file included in the original repository,
we have the opportunity to decide on a package manager.

## Decision
We will use yarn.

## Consequences
Lockfile generation is more deterministic, package installation is a little
faster.
