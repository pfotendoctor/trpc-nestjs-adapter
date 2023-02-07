export declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        someValueOnContext: string;
    } & import("../lib/nest-resolver.type").NestResolver;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    something: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: {
                someValueOnContext: string;
            } & import("../lib/nest-resolver.type").NestResolver;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _ctx_out: {
            someValueOnContext: string;
        } & import("../lib/nest-resolver.type").NestResolver;
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
    }, {
        done: boolean;
        isRequestScoped: boolean;
        hostHeader: any;
    }>;
}>;
//# sourceMappingURL=init-trpc.d.ts.map