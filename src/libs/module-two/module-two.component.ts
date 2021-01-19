import { Component, OnInit } from '@angular/core';
import { ModuleTwoPublisherService } from './services/module-two-publisher.service';
import { ModuleTwoSubscriberService } from './services/module-two-subscriber.service';

@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.css']
})
export class ModuleTwoComponent implements OnInit {
  constructor(
    private readonly publisher: ModuleTwoPublisherService,
    private readonly subscriber: ModuleTwoSubscriberService,
  ) { }

  ngOnInit(): void {
    this.subscriber.addHandler();
  }

  public create(): void {
    this.publisher.createItem();
  }

  public update(): void {
    this.publisher.updateItem();
  }

  public delete(): void {
    this.publisher.deleteItem();
  }
}
