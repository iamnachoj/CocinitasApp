"use strict";(self.webpackChunkcocinitas_app=self.webpackChunkcocinitas_app||[]).push([[723],{6723:(C,p,s)=>{s.r(p),s.d(p,{AuthModule:()=>Z});var u=s(1196),n=s(8256),d=s(2401),g=s(6895),r=s(433);let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-loading-spinner"]],decls:1,vars:0,consts:[[1,"lds-dual-ring"]],template:function(o,e){1&o&&n._UZ(0,"div",0)},styles:['.lds-dual-ring[_ngcontent-%COMP%]{display:inline;width:80px;height:80px}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;width:32px;height:32px;margin:4px;border-radius:50%;border:3px solid black;border-color:black transparent black transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']}),t})();function m(t,i){if(1&t&&(n.TgZ(0,"div",15)(1,"p"),n._uU(2),n.qZA()()),2&t){const o=n.oxw();n.xp6(2),n.Oqu(o.error)}}function h(t,i){1&t&&n._UZ(0,"app-loading-spinner")}const f=[{path:"",component:(()=>{class t{constructor(o,e){this.auth=o,this.router=e,this.logIn=!0,this.isLoading=!1,this.error=""}ngOnInit(){}onLogin(o){if(!o.valid)return;this.isLoading=!0;const e=o.value.email,a=o.value.password;this.error="",this.AuthObservable=this.logIn?this.auth.login(e,a):this.auth.signup(e,a),this.AuthObservable.subscribe({next:l=>{this.isLoading=!1,o.reset(),this.router.navigate(["/recipes"]).then()},error:l=>{this.error=l,this.isLoading=!1}})}signupMode(){this.logIn=!this.logIn}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(d.e),n.Y36(u.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-auth"]],decls:26,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-xs-1","col-md-4"],[1,"col-xs-10","col-md-4"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","username"],["type","email","required","","email","","id","username","name","email","ngModel","",1,"form-control"],["for","password"],["type","password","id","password","name","password","required","","minlength","8","ngModel","",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"click"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],[1,"alert","alert-danger"]],template:function(o,e){if(1&o){const a=n.EpF();n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"div",2),n.TgZ(3,"div",3)(4,"h2"),n._uU(5),n.qZA(),n.TgZ(6,"form",4,5),n.NdJ("ngSubmit",function(){n.CHM(a);const b=n.MAs(7);return n.KtG(e.onLogin(b))}),n.TgZ(8,"div",6)(9,"label",7),n._uU(10,"Email"),n.qZA(),n._UZ(11,"input",8),n.qZA(),n.TgZ(12,"div",6)(13,"label",9),n._uU(14,"Password"),n.qZA(),n._UZ(15,"input",10),n.qZA(),n.TgZ(16,"button",11),n._uU(17),n.qZA()(),n.TgZ(18,"p"),n._uU(19),n.TgZ(20,"a",12),n.NdJ("click",function(){return e.signupMode()}),n._uU(21),n.qZA(),n._uU(22,"."),n.qZA(),n.YNc(23,m,3,1,"div",13),n.YNc(24,h,1,0,"app-loading-spinner",14),n.qZA(),n._UZ(25,"div",2),n.qZA()()}if(2&o){const a=n.MAs(7);n.xp6(5),n.Oqu(e.logIn?"Log in":"Sign up"),n.xp6(11),n.Q6J("disabled",!a.valid),n.xp6(1),n.Oqu(e.logIn?"Log in":"Sign up"),n.xp6(2),n.Oqu(e.logIn?"Not an user? ":"Already an user? "),n.xp6(2),n.hij("",e.logIn?"sign up":"log in"," here"),n.xp6(2),n.Q6J("ngIf",e.error),n.xp6(1),n.Q6J("ngIf",e.isLoading)}},dependencies:[g.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.on,r.On,r.F,c],styles:["a[_ngcontent-%COMP%]{cursor:pointer}h2[_ngcontent-%COMP%]{display:inline}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.Bz.forChild(f),u.Bz]}),t})();var v=s(4466);let Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[v.m,A]}),t})()}}]);