# NexusHub Content Seed

This directory contains seed data for your NexusHub project.

## Structure

- `pages.json` - Static pages (home, about, contact, etc.)
- `collections/` - Dynamic content collections
- `globals.json` - Global site settings

## Usage

1. Edit the seed files with your content
2. Run `npx nexus seed` to upload to NexusHub
3. Run `npx nexus pull` to sync content locally

## Notes

- The `cache.json` file is ignored by git (contains local copies)
- Use the CLI to keep content in sync between local and production
