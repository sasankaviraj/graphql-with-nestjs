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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const project_entity_1 = require("../project/entities/project.entity");
const create_employee_dto_1 = require("./dto/create.employee.dto");
const employee_service_1 = require("./employee.service");
const employee_entity_1 = require("./entity/employee.entity");
let EmployeeResolver = class EmployeeResolver {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    findAll() {
        return this.employeeService.findAll();
    }
    create(employee) {
        return this.employeeService.create(employee);
    }
    project(employee) {
        return this.employeeService.getProject(employee.projectId);
    }
    findOne(id) {
        return this.employeeService.findOne(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [employee_entity_1.Employee], { name: "getAllEmployees" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_entity_1.Employee, { name: "createEmployee" }),
    __param(0, (0, graphql_1.Args)('employee')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.EmployeeCreateDto]),
    __metadata("design:returntype", void 0)
], EmployeeResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.ResolveField)(() => project_entity_1.Project),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_entity_1.Employee]),
    __metadata("design:returntype", void 0)
], EmployeeResolver.prototype, "project", null);
__decorate([
    (0, graphql_1.Query)(() => employee_entity_1.Employee, { name: "findEmployee" }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "findOne", null);
EmployeeResolver = __decorate([
    (0, graphql_1.Resolver)(() => employee_entity_1.Employee),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeResolver);
exports.EmployeeResolver = EmployeeResolver;
//# sourceMappingURL=employee.resolver.js.map