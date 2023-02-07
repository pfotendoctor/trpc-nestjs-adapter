"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildNestResolver = void 0;
const core_1 = require("@nestjs/core");
function buildNestResolver(req, moduleRef) {
    // Retrieve the contextId specific to this request
    const contextId = core_1.ContextIdFactory.getByRequest(req);
    // Effectively a provider for the `REQUEST` token
    moduleRef.registerRequestByContextId(req, contextId);
    const resolve = (typeOrToken) => moduleRef.resolve(typeOrToken, contextId, { strict: false });
    // API Candidates
    // const requestScopedService = await ctx.nestResolver.resolve(RequestScopedService);
    // const requestScopedService = await ctx.nestResolver(RequestScopedService);
    // const requestScopedService = await ctx.nestResolve(RequestScopedService);
    // const requestScopedService = await ctx.resolveNestDependency(RequestScopedService);
    // const requestScopedService = await ctx.resolveNest(RequestScopedService);
    // const requestScopedService = await ctx.resolve(RequestScopedService);
    return {
        resolveNestDependency: resolve,
    };
}
exports.buildNestResolver = buildNestResolver;
