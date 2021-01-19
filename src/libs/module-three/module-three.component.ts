import { Component, OnInit } from '@angular/core';
import { ModuleThreePublisherService } from './services/module-three-publisher.service';
import { ModuleThreeSubscriberService } from './services/module-three-subscriber.service';

@Component({
  selector: 'app-module-three',
  templateUrl: './module-three.component.html',
  styleUrls: ['./module-three.component.css']
})
export class ModuleThreeComponent implements OnInit {
  constructor(
    private readonly publisher: ModuleThreePublisherService,
    private readonly subscriber: ModuleThreeSubscriberService,
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
