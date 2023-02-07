import { AnyRouter } from "@trpc/server";
export interface TrpcModuleOptions<TRouter = AnyRouter> {
    path: "/trpc" | string;
    router: TRouter;
    createContext: (...args: any[]) => any | Promise<any>;
}
//# sourceMappingURL=trpc-module-options.type.d.ts.map