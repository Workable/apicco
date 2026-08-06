# Apicco

[![Build Status](https://travis-ci.org/SokratisVidros/apicco.svg?branch=master)](https://travis-ci.org/SokratisVidros/apicco)

The fastest way to build JSON APIs in [Koa.js](https://koajs.com/)

Map your API server folder structure to language‑level like method calls on the client.

```
app/
└── api/
    └── user/
        └── sayHello.js => POST /api/user.sayHello => api.user.sayHello()
```

## Apicco middleware

Apicco middleware is a dynamic Koa router middleware that maps folder & file structure to JSON HTTP endpoints.

- [NPM package](https://www.npmjs.com/package/@workablehr/apicco-lib) —
  published from this repo as `@workablehr/apicco-lib`. The unscoped
  [`apicco-lib`](https://www.npmjs.com/package/apicco-lib) is the original,
  unmaintained package and stops at `1.3.2`.
- [Documentation](lib/README.md)

## Apicco SDK

Apicco SDK creates dynamically an Apicco API client.

- [Documentation](sdk/README.md)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

Special thanks to

* [@jmike](https://github.com/jmike) for his work on defining the format of action files on the server side
* [@brianleroux](https://github.com/brianleroux) for inspiring us on the SDK after this
[Slack client package](https://www.npmjs.com/package/slack)
* [@stavros-wb](https://github.com/stavros-wb) for the early adoption
