import { ModuleRef } from '@nestjs/core';
export declare function buildNestResolver(req: any, moduleRef: ModuleRef): {
    resolveNestDependency: {
        <TInput = any, TResult = TInput>(typeOrToken: string | symbol | Function | import("@nestjs/common").Type<TInput>): Promise<TResult>;
        <TInput_1 = any, TResult_1 = TInput_1>(typeOrToken: string | symbol | Function | import("@nestjs/common").Type<TInput_1>, contextId?: {
            id: number;
        } | undefined): Promise<TResult_1>;
        <TInput_2 = any, TResult_2 = TInput_2>(typeOrToken: string | symbol | Function | import("@nestjs/common").Type<TInput_2>, contextId?: {
            id: number;
        } | undefined, options?: {
            strict?: boolean | undefined;
            each?: false | undefined;
        } | undefined): Promise<TResult_2>;
        <TInput_3 = any, TResult_3 = TInput_3>(typeOrToken: string | symbol | Function | import("@nestjs/common").Type<TInput_3>, contextId?: {
            id: number;
        } | undefined, options?: {
            strict?: boolean | undefined;
            each: true;
        } | undefined): Promise<TResult_3[]>;
        <TInput_4 = any, TResult_4 = TInput_4>(typeOrToken: string | symbol | Function | import("@nestjs/common").Type<TInput_4>, contextId?: {
            id: number;
        } | undefined, options?: import("@nestjs/common/interfaces").GetOrResolveOptions | undefined): Promise<TResult_4 | TResult_4[]>;
    };
};
//# sourceMappingURL=build-nest-resolver.d.ts.map