"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TrpcModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrpcModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const attach_trpc_to_express_app_1 = require("./attach-trpc-to-express-app");
const tokens_1 = require("./tokens");
let TrpcModule = TrpcModule_1 = class TrpcModule {
    static forRoot(options) {
        if (!options.createContext || !options.path || !options.router) {
            throw new Error('Please supply all of the required options to TrpcModule');
        }
        return {
            module: TrpcModule_1,
            providers: [
                { provide: tokens_1.TRPC_ROUTER_TOKEN, useValue: options.router },
                { provide: tokens_1.TRPC_PATH_TOKEN, useValue: options.path },
                { provide: tokens_1.TRPC_CREATE_CONTEXT_TOKEN, useValue: options.createContext },
            ],
        };
    }
    onModuleInit() {
        this.moduleRef.create;
        (0, attach_trpc_to_express_app_1.attachTrpcToExpressApp)({
            moduleRef: this.moduleRef,
            expressApp: this.httpAdapterHost.httpAdapter.getInstance(),
            path: this.path,
            createContext: this.createContext,
            router: this.router,
        });
    }
};
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", core_1.ModuleRef)
], TrpcModule.prototype, "moduleRef", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", core_1.HttpAdapterHost)
], TrpcModule.prototype, "httpAdapterHost", void 0);
__decorate([
    (0, common_1.Inject)(tokens_1.TRPC_ROUTER_TOKEN),
    __metadata("design:type", Object)
], TrpcModule.prototype, "router", void 0);
__decorate([
    (0, common_1.Inject)(tokens_1.TRPC_PATH_TOKEN),
    __metadata("design:type", Object)
], TrpcModule.prototype, "path", void 0);
__decorate([
    (0, common_1.Inject)(tokens_1.TRPC_CREATE_CONTEXT_TOKEN),
    __metadata("design:type", Object)
], TrpcModule.prototype, "createContext", void 0);
TrpcModule = TrpcModule_1 = __decorate([
    (0, common_1.Module)({})
], TrpcModule);
exports.TrpcModule = TrpcModule;
