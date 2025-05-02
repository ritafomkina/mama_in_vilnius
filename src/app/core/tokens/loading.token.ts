import { InjectionToken, Signal, signal } from '@angular/core';

export interface LoadingState {
  start(): void;
  stop(): void;
  state: Signal<boolean>;
}

export const LOADING = new InjectionToken<LoadingState>(
  'page content loading state',
  {
    providedIn: 'root',
    factory: (): LoadingState => {
      const isLoading = signal(false);
      return {
        start(): void {
          isLoading.set(true);
        },
        stop(): void {
          isLoading.set(false);
        },
        state: isLoading,
      };
    },
  }
);
