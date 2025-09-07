# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a French personal journal blog built with Hugo using the "Diary" theme. The site is configured in French (`fr-fr`) with the title "Mon Journal Intime" (My Personal Journal).

## Architecture

- **Static Site Generator**: Hugo
- **Theme**: [hugo-theme-diary](https://github.com/AmazingRise/hugo-theme-diary) - A elegant journal theme ported from hexo-theme-Journal
- **Configuration**: `hugo.toml` in project root
- **Content**: Blog posts in `content/posts/` directory in Markdown format
- **Theme Location**: `themes/diary/` (likely a git submodule)
- **Generated Site**: Built files output to `public/` directory

## Key Commands

### Development
```bash
hugo server          # Start development server with live reload
hugo server -D       # Include draft posts in development
```

### Building
```bash
hugo                 # Build the site (outputs to public/)
hugo --minify        # Build with minification
```

### Content Management
```bash
hugo new posts/title.md    # Create new blog post
```

## Content Structure

Blog posts are located in `content/posts/` and use Hugo's front matter format:
```markdown
+++
date = '2025-09-07T21:56:20+02:00'
draft = false
title = 'Post Title'
+++

Content here...
```

## Theme Features

The Diary theme includes:
- Mobile-friendly responsive design
- Dark mode support
- Table of contents with scroll spy
- Multiple language support (currently configured for French)
- LaTeX support (disabled by default)
- Comment system integration support
- Third-party service integrations (Analytics, etc.)

## Configuration

Main configuration is in `hugo.toml`:
- Base URL, language, and title settings
- Theme-specific parameters under `[params]`
- Author and subtitle configuration