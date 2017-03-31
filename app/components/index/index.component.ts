import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  moduleId    : module.id,
  selector    : 'index',
  templateUrl : 'index.component.html',
  styleUrls   : ['index.component.less']
})
export class IndexComponent {
  constructor(
  private _router       : Router,
  ) {}

  enterSelection() {
    this._router.navigate(['/game-selection']);
  }
}
