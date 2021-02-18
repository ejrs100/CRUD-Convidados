import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convidado } from '../convidado';
import { ConvidadoService } from '../convidado.service';

@Component({
  selector: 'app-create-convidado',
  templateUrl: './create-convidado.component.html',
  styleUrls: ['./create-convidado.component.css']
})
export class CreateConvidadoComponent implements OnInit {

  convidado: Convidado = new Convidado();
  constructor(private convidadoService: ConvidadoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  salvarConvidado(){
    this.convidadoService.createConvidado(this.convidado).subscribe(data =>{
      console.log(data);
      this.goToListaConvidados();
    },
    error => console.log(error));
  }

  goToListaConvidados(){
    this.router.navigate(['/convidados']);
  }

  onSubmit(){
    console.log(this.convidado);
    this.salvarConvidado();
  }
}
