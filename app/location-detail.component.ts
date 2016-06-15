import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Location }        from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'my-location-detail',
  templateUrl: 'app/location-detail.component.html',
  styleUrls: ['app/location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  @Input() location: Location;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private locationService: LocationService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.locationService.getLocation(id)
          .then(location => this.location = location);
    } else {
      this.navigated = false;
      this.location = new Location();
    }
  }
  save() {
    this.locationService
        .save(this.location)
        .then(location => {
          this.location = location; // saved location, w/ id if new
          this.goBack(location);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedLocation: Location = null) {
    this.close.emit(savedLocation);
    if (this.navigated) { window.history.back(); }
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/