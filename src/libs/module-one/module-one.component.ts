import { Component, OnInit } from '@angular/core';
import { ModuleOnePublisherService } from './services/module-one-publisher.service';
import { ModuleOneSubscriberService } from './services/module-one-subscriber.service';

@Component({
  selector: 'app-module-one',
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.css']
})
export class ModuleOneComponent implements OnInit {
  constructor(
    private readonly publisher: ModuleOnePublisherService,
    private readonly subscriber: ModuleOneSubscriberService,
  ) { }

  ngOnInit(): void {
    this.subscriber.addCreateItemHandler();
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
