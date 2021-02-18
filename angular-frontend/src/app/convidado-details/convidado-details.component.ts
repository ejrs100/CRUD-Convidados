import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Convidado } from '../convidado';
import { ConvidadoService } from '../convidado.service';

@Component({
  selector: 'app-convidado-details',
  templateUrl: './convidado-details.component.html',
  styleUrls: ['./convidado-details.component.css']
})
export class ConvidadoDetailsComponent implements OnInit {

  id: number = 0 
  convidado: Convidado = new Convidado()
  constructor(private route: ActivatedRoute, private convidadoService: ConvidadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.convidadoService.getConvidadoById(this.id).subscribe( data =>{
      this.convidado = data;
    })
  }

}
