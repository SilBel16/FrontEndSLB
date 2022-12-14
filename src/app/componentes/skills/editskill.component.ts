import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  hab: Skill = null;
  
  constructor(private sSkill: SkillService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data =>{
        this.hab = data;
      }, err =>{
        alert("Error al modificar Hard skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id, this.hab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Hard skill");
         this.router.navigate(['']);
      }
    )
  }

}