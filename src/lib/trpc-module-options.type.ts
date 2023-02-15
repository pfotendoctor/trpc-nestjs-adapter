import { AnyRouter } from "@trpc/server";
import { Request } from '@nestjs/common';
import { NestResolver } from "./nest-resolver.type";
import { buildNestResolver } from "./build-nest-resolver";

export interface TrpcModuleOptions<TRouter = AnyRouter> {
  path: "/trpc" | string;
  router: TRouter;
  createContext: (
    request: Request,
    resolveNestDependency: ReturnType<typeof buildNestResolver>['resolveNestDependency']
  ) => any | Promise<any>;
}
