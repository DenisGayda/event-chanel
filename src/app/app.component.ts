import { Component, OnInit } from '@angular/core';
import { CommandAdapterService } from '../libs/adapters/command-adapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly commandAdapterService: CommandAdapterService) {
  }

  ngOnInit(): void {
    this.commandAdapterService.makeHandler();
  }
}
