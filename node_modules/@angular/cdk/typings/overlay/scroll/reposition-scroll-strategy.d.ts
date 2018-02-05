import { ScrollStrategy } from './scroll-strategy';
import { OverlayRef } from '../overlay-ref';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
/**
 * Config options for the RepositionScrollStrategy.
 */
export interface RepositionScrollStrategyConfig {
    scrollThrottle?: number;
}
/**
 * Strategy that will update the element position as the user is scrolling.
 */
export declare class RepositionScrollStrategy implements ScrollStrategy {
    private _scrollDispatcher;
    private _config;
    private _scrollSubscription;
    private _overlayRef;
    constructor(_scrollDispatcher: ScrollDispatcher, _config?: RepositionScrollStrategyConfig | undefined);
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef: OverlayRef): void;
    /** Enables repositioning of the attached overlay on scroll. */
    enable(): void;
    /** Disables repositioning of the attached overlay on scroll. */
    disable(): void;
}
