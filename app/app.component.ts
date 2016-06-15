import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent }  from './dashboard.component';
import { LocationsComponent }     from './locations.component';
import { LocationDetailComponent } from './location-detail.component';
import { LocationService }         from './location.service';

import { SelectParkingComponent } from './select-parking.component';

@Component({
  selector: 'my-app',

  templateUrl: 'app/landingPage.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    LocationService,
  ]
})
@RouteConfig([
  { path: '/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
  { path: '/detail/:id', name: 'LocationDetail', component: LocationDetailComponent },
  { path: '/locations',     name: 'Locations',     component: LocationsComponent },
  {
    path: '/selectParking',
    name: 'SelectParking',
    component: SelectParkingComponent
  }
])
export class AppComponent {
  title = 'Tour of Locations';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/