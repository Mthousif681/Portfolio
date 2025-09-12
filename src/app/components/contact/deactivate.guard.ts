import { Injectable } from '@angular/core';
import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { ContactComponent } from './contact.component';
import { Observable } from 'rxjs';


// Create an interface for CanDeactivate
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Define the guard
export const deactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};