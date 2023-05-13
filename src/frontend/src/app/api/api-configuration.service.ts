import { Injectable } from '@angular/core';

/**
 * Represents the provider of configuration values for API services.
 */
@Injectable({
    providedIn: 'root',
})
export class ApiConfiguration {

    constructor() {
        this.rootUrl = '';
    }
    /**
     * Gets or sets the root URL where the API services are.
     */
    rootUrl: string;

}
