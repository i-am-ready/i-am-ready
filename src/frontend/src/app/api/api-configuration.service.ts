import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

/**
 * Represents the provider of configuration values for API services.
 */
@Injectable({
    providedIn: 'root',
})
export class ApiConfiguration {

    constructor() {
        this.rootUrl = environment.settings.apiRootUrl;
    }
    /**
     * Gets or sets the root URL where the API services are.
     */
    rootUrl: string;

}
