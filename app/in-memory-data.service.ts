export class InMemoryDataService {
  createDb() {
    let locations = [{
		"id" : "JMRoad",
		"name" : "J.M. Road",
		"center" : [18.521456268852553, 73.84720355272293],
		"spaces":[{
		"id" : "JMRoad-S1",
		"loc":[18.516557630068778, 73.84272658895497],
		"owner" : {"id":"xyz", "name": "xyz"},
		"name" : "S1 (Near Dominos)",
		"slots": [{"id":1, "name":"Parking1"}, {"id":2, "name":"Parking2"}, {"id":3, "name":"Parking3", "status":"reserved"}, {"id":4, "name":"Parking4", "status":"busy"}],
		"cords":[{"lat":18.516557630068778, "lng":73.84272658895497}, {"lat":18.516547630069223, "lng":73.84274658895481}, {"lat":18.5162676300817, "lng":73.84256658895492}, {"lat":18.51628763008083, "lng":73.842536588955}]
		},{
		"id" : "JMRoad-S2",
		"loc":[18.516538554896176, 73.84284192394261],
		"owner" : {"id":"xyz12", "name": "xyz12"},
		"name" : "S2 (Near SaiBabaMandir)",
		"slots": [{"id":"1", "name":"Parking1", "status":"busy"}, {"id":"2", "name":"Parking2", "status":"reserved"}],
		"cords":[{"lat":18.516538554896176, "lng":73.84284192394261}, {"lat":18.51652219650382, "lng":73.84286125339031}, {"lat":18.5164221391631, "lng":73.84279323561668}, {"lat":18.51643323739123, "lng":73.84277329390056}]
		}]
	}, {
		"id" : "FCRoad",
		"name" : "F. C. Road",
		"center" : [18.524538700511606, 73.84127855300903],
		"spaces":[{
		"id" : "FCRoad-S1",
		"loc":[18.516538554896176, 73.84284192394261],
		"owner" : {"id":"abc1", "name": "abc1"},
		"name" : "S1 (Near Dominos)",
		"slots": [{"id":"sdsd", "name":"Parking1"}, {"id":"wew", "name":"Parking2"}, {"id":"sdsds", "name":"Parking3", "status":"reserved"}, {"id":"sdsdwe", "name":"Parking4", "status":"busy"}],
		"cords":[{"lat":18.516557630068778, "lng":73.84272658895497}, {"lat":18.516547630069223, "lng":73.84274658895481}, {"lat":18.5162676300817, "lng":73.84256658895492}, {"lat":18.51628763008083, "lng":73.842536588955}]
		}]
	}
];
    return {locations};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/