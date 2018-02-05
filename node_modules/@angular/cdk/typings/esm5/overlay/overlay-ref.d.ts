/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone } from '@angular/core';
import { PortalOutlet, Portal } from '@angular/cdk/portal';
import { OverlayConfig } from './overlay-config';
import { OverlayKeyboardDispatcher } from './keyboard/overlay-keyboard-dispatcher';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export declare class OverlayRef implements PortalOutlet {
    private _portalOutlet;
    private _pane;
    private _config;
    private _ngZone;
    private _keyboardDispatcher;
    private _backdropElement;
    private _backdropClick;
    private _attachments;
    private _detachments;
    /** Stream of keydown events dispatched to this overlay. */
    _keydownEvents: Subject<KeyboardEvent>;
    constructor(_portalOutlet: PortalOutlet, _pane: HTMLElement, _config: OverlayConfig, _ngZone: NgZone, _keyboardDispatcher: OverlayKeyboardDispatcher);
    /** The overlay's HTML element */
    readonly overlayElement: HTMLElement;
    /**
     * Attaches the overlay to a portal instance and adds the backdrop.
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    attach(portal: Portal<any>): any;
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    detach(): any;
    /**
     * Cleans up the overlay from the DOM.
     */
    dispose(): void;
    /**
     * Checks whether the overlay has been attached.
     */
    hasAttached(): boolean;
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     */
    backdropClick(): Observable<void>;
    /** Gets an observable that emits when the overlay has been attached. */
    attachments(): Observable<void>;
    /** Gets an observable that emits when the overlay has been detached. */
    detachments(): Observable<void>;
    /** Gets an observable of keydown events targeted to this overlay. */
    keydownEvents(): Observable<KeyboardEvent>;
    /**
     * Gets the current config of the overlay.
     */
    getConfig(): OverlayConfig;
    /** Updates the position of the overlay based on the position strategy. */
    updatePosition(): void;
    /** Updates the text direction of the overlay panel. */
    private updateDirection();
    /** Updates the size of the overlay based on the overlay config. */
    updateSize(): void;
    /** Toggles the pointer events for the overlay pane element. */
    private _togglePointerEvents(enablePointer);
    /** Attaches a backdrop for this overlay. */
    private _attachBackdrop();
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    private _updateStackingOrder();
    /** Detaches the backdrop (if any) associated with the overlay. */
    detachBackdrop(): void;
}
