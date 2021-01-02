import { Component } from '@angular/core';
import { UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-module';

  constructor(private usersService: UsersService) {
    this.usersService.getData().subscribe(data => {
      console.log('data',data)
    })
  }
}
