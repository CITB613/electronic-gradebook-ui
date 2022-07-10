import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.tokenService.signOut();
    this.router.navigateByUrl('/login');
  }
}
