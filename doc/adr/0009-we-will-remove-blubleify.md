# 9. We will remove blubleify

Date: 2025-08-22

## Status

Accepted

## Context
The bubleify package is included in dependencies but it is not clear how to use
it or how significant it is to the users of this package. This doesn't mean that
it is not significant.

The Buble project says

> Bublé was created when ES2015 was still the future. Nowadays, all modern 
> browsers support all of ES2015 and (in some cases) beyond. Unless you need to
> support IE11, you probably don't need to use Bublé to convert your code to ES5.

Unlike dev dependencies which do not directly affect the published package,
removing a production dependency deserves an ADR.

## Decision
We will remove the bubleify dependency.

## Consequences
bubleify will no longer be available. Dependencies will shrink. We will not be
including a dependency that we do not know how to use, and which appears to be
superseded by ES2015.
