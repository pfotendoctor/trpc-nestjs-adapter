import { AnyRouter } from "@trpc/server";
import { buildNestResolver } from "./build-nest-resolver";
export interface TrpcModuleOptions<TRouter = AnyRouter> {
    path: "/trpc" | string;
    router: TRouter;
    createContext: (request: Request, response: Response, resolveNestDependency: ReturnType<typeof buildNestResolver>['resolveNestDependency']) => any | Promise<any>;
}
//# sourceMappingURL=trpc-module-options.type.d.ts.map