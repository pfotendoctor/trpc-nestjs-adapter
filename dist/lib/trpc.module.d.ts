import { DynamicModule, OnModuleInit } from '@nestjs/common';
import { TrpcModuleOptions } from './trpc-module-options.type';
export declare class TrpcModule implements OnModuleInit {
    private readonly moduleRef;
    private readonly httpAdapterHost;
    private readonly router;
    private readonly path;
    private readonly createContext;
    static forRoot(options: TrpcModuleOptions): DynamicModule;
    onModuleInit(): void;
}
//# sourceMappingURL=trpc.module.d.ts.map