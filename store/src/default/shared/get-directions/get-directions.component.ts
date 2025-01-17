/*
 * spurtcommerce
 * version 1.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-directions',
  templateUrl: './get-directions.component.html',
  styleUrls: ['./get-directions.component.scss']
})
export class GetDirectionsComponent {
  // google maps zoom level
  public zoom = 18;
  // initial center position for the map
  public lattitudeLocation = 10.90708;
  public longitudeLocation = 78.70486;

  constructor() {}
}
