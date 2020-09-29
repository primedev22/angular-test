import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {
  accordians = [];
  
  constructor(public activeModal: NgbActiveModal, public notificationService: NotificationService) { }
  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe((data: any[])=>{
      this.accordians = data['accordian'];
    });
  }
}
