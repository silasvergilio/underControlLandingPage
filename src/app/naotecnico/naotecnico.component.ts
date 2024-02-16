import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naotecnico',
  templateUrl: './naotecnico.component.html',
  styleUrls: ['./naotecnico.component.css']
})
export class NaotecnicoComponent implements OnInit {

  constructor(private router: Router) {}

  public backHome(){
    this.router.navigate(['/'])
  }

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

  public navigateCad() {

    this.router.navigate(['cad']);
    
  }

  public navigateHome() {

    this.router.navigate(['']);
    
  }
  
  ngOnInit(): void {
  }

}
