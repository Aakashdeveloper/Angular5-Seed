/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
/** Workaround for https://github.com/angular/angular/issues/17849 */
export declare const _MatTabLabelBaseClass: typeof CdkPortal;
/** Used to flag tab labels for use with the portal directive */
export declare class MatTabLabel extends _MatTabLabelBaseClass {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
