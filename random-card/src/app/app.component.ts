import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    // as soon as module is initialized I want to initialize following

    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
        console.log(this.user);
      },
      (err) => {
        this.toastr.error(err.status, 'Failed to load users!');
      }
    );
  }
}
