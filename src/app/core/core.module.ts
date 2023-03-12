import {NgModule} from '@angular/core';
import {DropdownDirective} from "../shared/dropdown.directive";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [DropdownDirective],
  exports: [DropdownDirective],
  imports: [
    HttpClientModule,
  ]
})
export class CoreModule { }
