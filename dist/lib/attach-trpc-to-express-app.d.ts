import { NestExpressApplication } from "@nestjs/platform-express";
import { TrpcModuleOptions } from "./trpc-module-options.type";
import { BuildTrpcNestMiddlewareOptions } from "./build-trpc-nest-middleware";
interface Options extends TrpcModuleOptions, BuildTrpcNestMiddlewareOptions {
    expressApp: NestExpressApplication;
}
/**
 * Attaches a TRPC router to your nestExpressApp
 * @param options: Options
 */
export declare function attachTrpcToExpressApp({ router, moduleRef, createContext, path, expressApp, }: Options): void;
export {};
//# sourceMappingURL=attach-trpc-to-express-app.d.ts.map