import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  public textRobot = "O nosso robô da temporada de 2024 se chama Viper, cujo nome é inspirado em uma unidade do Starcraft. Tem 27 polegadas de altura, 24 polegadas de largura, 23,5 polegadas de comprimento e pesa 47 quilos. O robô foi inteiramente projetada em CAD."

  public navigateAwards() {

    this.router.navigate(['premios']);
    
  }
  
  public backHome(){
    console.log('back button')
    this.router.navigate(['/'])
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