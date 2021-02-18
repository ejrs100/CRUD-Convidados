import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convidado } from '../convidado';
import { ConvidadoService } from '../convidado.service';

@Component({
  selector: 'app-update-convidado',
  templateUrl: './update-convidado.component.html',
  styleUrls: ['./update-convidado.component.css']
})
export class UpdateConvidadoComponent implements OnInit {

  id: number = 0;
  convidado: Convidado = new Convidado();
  constructor(private convidadoService: ConvidadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.convidadoService.getConvidadoById(this.id).subscribe(data =>{
        this.convidado = data
    }, error => console.log(error));
  }

  onSubmit(){
    this.convidadoService.updateConvidado(this.id, this.convidado).subscribe( data =>{
      this.goToListaConvidados();
    }, error => console.log(error));
  }

  goToListaConvidados(){
    this.router.navigate(['/convidados']);
  }

}
