import { AnyRouter } from "@trpc/server";
import { Request } from '@nestjs/common';
import { NestResolver } from "./nest-resolver.type";

export interface TrpcModuleOptions<TRouter = AnyRouter> {
  path: "/trpc" | string;
  router: TRouter;
  createContext: (request: Request, resolveNestDependency: NestResolver) => any | Promise<any>;
}
