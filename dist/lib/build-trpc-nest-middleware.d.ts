import { ModuleRef } from "@nestjs/core";
import { AnyRouter } from "@trpc/server";
import { buildNestResolver } from "./build-nest-resolver";
export interface BuildTrpcNestMiddlewareOptions {
    /** Your TRPC Router */
    router: AnyRouter;
    /** The NestJS ModuleRef */
    moduleRef: ModuleRef;
    /** A function that returns the context object as used with TRPC */
    createContext: (request: Request, resolveNestDependency: ReturnType<typeof buildNestResolver>['resolveNestDependency']) => any | Promise<any>;
}
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
export declare function buildTrpcNestMiddleware({ moduleRef, router, createContext, }: BuildTrpcNestMiddlewareOptions): (req: any, res: any) => Promise<void>;
//# sourceMappingURL=build-trpc-nest-middleware.d.ts.map