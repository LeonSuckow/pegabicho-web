import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { UserRequestViewModel } from 'src/app/viewModel/userRequestViewModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [
    trigger('fadeToggle', [
      state('visivel', style({
        opacity: 1,
      })),
      state('invisivel', style({
        opacity: 1,
      })),
      transition('invisivel <=> visivel', [
        animate('0.4s', keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1}),
        ])),
      ]),
    ]),
  ]
})
export class LoginComponent implements OnInit {

  empresa: boolean;
  loginForm: FormGroup
  nameForm: string;
  formSelected: string;
  animate: boolean;
  formTypes: any[] = [
    { name: "Login", value: "loginForm" },
    { name: "Criar Login", value: "loginRegister" },
    { name: "Completar Cadastro", value: "completeRegister" },
    { name: "Adicionar Endereço", value: "addressRegister" },
    { name: "Adicionar Pet", value: "petRegister" }
  ]
  @Input() password: any
  @Input() email: any
  @Input() Login: UserRequestViewModel
  typeUser : UserTypeEnum
  constructor(private fb: FormBuilder, private loginService: LoginService, public router: Router) { }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   email: this.fb.control('', [Validators.required, Validators.email]),
    //   password: this.fb.control('', [Validators.required])
    // })
    this.nameForm = "loginForm";
    this.formSelected = "loginForm";
  }

  login(form: UserRequestViewModel) {
    this.loginService.login(form.Email, form.Password)
      .subscribe(user => console.log(user))
  }
  testeCreate() {
    this.router.navigateByUrl("userCreate")
  }

  changeForm() {
    this.animate = !this.animate;
    console.log(this.formSelected)
    this.nameForm = this.formSelected;
  }
}
