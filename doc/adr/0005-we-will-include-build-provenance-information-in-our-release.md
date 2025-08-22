# 5. We will include build provenance information in our release

Date: 2025-08-22

## Status

Accepted

## Context
Build provenance is the detailed record of how the package was created,
including information about the build process, tools used, and the environment
in which the build occurred.

## Decision
We will publish build provenance information to npm via Github Actions.

## Consequences
Users of this package will be able to verify the provenance of the package in
their projects.
