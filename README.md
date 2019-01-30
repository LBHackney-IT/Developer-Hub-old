# Hackney Developer Hub

The source code behind [developer.api.hackney.gov.uk](http://developer.api.hackney.gov.uk).

## Stack

- Jekyll - Ruby static site generator
- Customised GOV.UK frontend

## Development

### Running locally

1. Install Docker
2. Install Node.js
3. Run `docker-compose build` to build the site
4. Run `npm install` to install the GOV.UK frontend styles
5. Run `docker-compose up` to start the server

The site will reload as you make changes, it typically takes about 20 seconds to rebuild.

If you change `_config.yml`, you must restart the server.
