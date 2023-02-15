"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTrpcNestMiddleware = void 0;
const standalone_1 = require("@trpc/server/adapters/standalone");
const build_nest_resolver_1 = require("./build-nest-resolver");
;
/**
 * Builds an Express middleware that handles all trpc requests.
 *
 * The middleware will add a `resolveNestDependency` property to the context
 *
 * `resolveNestDependency` is a function that can be used to resolve NestJS providers
 *
 * @param req Express request object
 * @param moduleRef The moduleRef from the NestJS app
 * @param createContext A function that returns the context object as used with TRPC
 * @returns Express middleware which is capable of handling trpc requests
 */
function buildTrpcNestMiddleware({ moduleRef, router, createContext, }) {
    return function trpcNestMiddleware(req, res) {
        const { resolveNestDependency } = (0, build_nest_resolver_1.buildNestResolver)(req, moduleRef);
        return (0, standalone_1.createHTTPHandler)({
            router,
            createContext: () => {
                const userProvidedContext = createContext(req, resolveNestDependency);
                return {
                    ...userProvidedContext,
                    resolveNestDependency,
                };
            },
        })(req, res);
    };
}
exports.buildTrpcNestMiddleware = buildTrpcNestMiddleware;
