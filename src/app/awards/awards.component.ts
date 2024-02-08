import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  constructor(private router: Router) {}

  public navigateAwards() {

    this.router.navigate(['premios']);
    
  }

  public navigateSobrenos() {

    this.router.navigate(['sobrenos']);
    
  }

  public navigateFirst() {

    this.router.navigate(['first']);
    
  }

  public navigatePatrocinadores() {

    this.router.navigate(['patrocinadores']);
    
  }

  public navigateGic() {

    this.router.navigate(['gic']);
    
  }

  public navigateRobos() {

    this.router.navigate(['robos']);
    
  }

  public navigateComunidade() {

    this.router.navigate(['comunidade']);
    
  }

  public navigateDevelopment() {

    this.router.navigate(['development']);
    
  }

  public navigateNaotecnico() {

    this.router.navigate(['naotecnico']);
    
  }

  public navigateHome() {

    this.router.navigate(['']);
    
  }
  
  ngOnInit(): void {
  }

}
