---
title: Updating files with Sed
tags:
  - Sed
  - Bash
emoji: 👋
---

## Installing on a Mac

It turns out that `sed` doesn't work as expect on Macs, instead you should install `gsed` from homebrew:

```bash
homebrew install gsed
```

You can then use `gsed` in place of `sed`.

## Updating a file that exists

To update a file that exists you need to:

```bash
gsed -i "pattern to update" filename.txt
```

For example:

```bash
gsed -i "8iFeatureEnabled: true" featureFlags.txt
```

would add `FeatureEnabled: true` onto the 8th line of `featureFlags.txt`