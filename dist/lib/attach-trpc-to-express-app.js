"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachTrpcToExpressApp = void 0;
const build_trpc_nest_middleware_1 = require("./build-trpc-nest-middleware");
/**
 * Attaches a TRPC router to your nestExpressApp
 * @param options: Options
 */
function attachTrpcToExpressApp({ router, moduleRef, createContext, path, expressApp, }) {
    const trpcNestMiddleware = (0, build_trpc_nest_middleware_1.buildTrpcNestMiddleware)({
        router,
        moduleRef,
        createContext,
    });
    expressApp.use(path, trpcNestMiddleware);
}
exports.attachTrpcToExpressApp = attachTrpcToExpressApp;
