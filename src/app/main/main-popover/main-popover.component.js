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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_component_1 = require("../../component/table/table.component");
var code_component_1 = require("../../component/code/code.component");
var tab_component_1 = require("../../component/tab/tab.component");
var common_1 = require("@angular/common");
var popover_component_1 = require("../../component/popover/popover.component");
var share_1 = require("../../component/common/share");
var grid_directive_1 = require("../../component/grid/grid.directive");
var animations_1 = require("../../component/common/animations");
var MainPopoverComponent = (function () {
    function MainPopoverComponent() {
        this.display = 'block';
    }
    MainPopoverComponent.prototype.ngOnInit = function () {
    };
    return MainPopoverComponent;
}());
__decorate([
    core_1.HostBinding('@fadeInUpState'),
    __metadata("design:type", Object)
], MainPopoverComponent.prototype, "fadeInUpState", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], MainPopoverComponent.prototype, "display", void 0);
MainPopoverComponent = __decorate([
    core_1.Component({
        selector: 'free-main-popover',
        templateUrl: './main-popover.component.html',
        styleUrls: ['./main-popover.component.scss'],
        animations: [animations_1.fadeInUp]
    }),
    __metadata("design:paramtypes", [])
], MainPopoverComponent);
exports.MainPopoverComponent = MainPopoverComponent;
var MainPopoverModule = (function () {
    function MainPopoverModule() {
    }
    return MainPopoverModule;
}());
MainPopoverModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            tab_component_1.TabGroupModule,
            code_component_1.CodeModule,
            table_component_1.TableModule,
            popover_component_1.PopoverModule,
            share_1.ShareModule,
            grid_directive_1.GridModule
        ],
        declarations: [MainPopoverComponent]
    })
], MainPopoverModule);
exports.MainPopoverModule = MainPopoverModule;
//# sourceMappingURL=main-popover.component.js.map