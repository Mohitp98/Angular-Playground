import { Component, OnInit, Input } from '@angular/core';
import {faMapMarkerAlt, faPhoneAlt, faAnchor, faEnvelope} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() user;

  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faAnchor = faAnchor;
  faPhoneAlt = faPhoneAlt;
  
  constructor() {}

  refresh(): void {
    window.location.reload();
}

  ngOnInit(): void {}
}
