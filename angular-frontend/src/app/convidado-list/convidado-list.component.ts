import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Convidado } from '../convidado'
import { ConvidadoService } from '../convidado.service';

@Component({
  selector: 'app-convidado-list',
  templateUrl: './convidado-list.component.html',
  styleUrls: ['./convidado-list.component.css']
})
export class ConvidadoListComponent implements OnInit {

  convidados: Convidado[] | undefined;

  constructor(private convidadoService: ConvidadoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getConvidados();
  }

  private getConvidados(){
    this.convidadoService.getListaConvidados().subscribe(data => {
      this.convidados = data;
    });
  }

  convidadoDetails(id: number){
    this.router.navigate(['convidado-details', id]);
  }

  updateConvidado(id: number){
    this.router.navigate(['update-convidado', id]);
  }

  deleteConvidado(id: number){
    this.convidadoService.deleteConvidado(id).subscribe( data =>{
      console.log(data);
      this.getConvidados();
    })
  }

}
