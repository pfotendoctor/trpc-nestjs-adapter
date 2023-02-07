import { inferAsyncReturnType } from '@trpc/server';
import { NestResolver } from './nest-resolver.type';
export type InferContextType<TContext> = TContext extends () => any ? inferAsyncReturnType<TContext> & NestResolver : NestResolver;
//# sourceMappingURL=infer-context-type.type.d.ts.map