//selector should be in square brackets in order to enable the attribute selector and should be called like <div selector-name></div>
import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: `./servers.component.html`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
