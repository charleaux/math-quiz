import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../user-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  name = 'Zoe';
  possibleUsers: Observable<string[]>;
  constructor(private userStateService: UserStateService) {}

  ngOnInit(): void {
    this.possibleUsers = this.userStateService.getPossibleUsers();
  }

  onNameClick() {
    console.log({ name: this.name });
    if (this.name === 'Zoe') {
      this.name = 'Lucas';
    } else {
      this.name = 'Zoe';
    }
    console.log({ name: this.name });
  }
}
