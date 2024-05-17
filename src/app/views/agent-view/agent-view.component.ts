import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrl: './agent-view.component.css'
})
export class AgentViewComponent implements OnInit {
    @Input() name = ''; 
    @Input() phoneNumber = '';
    @Input() email = '';
  
    constructor(private activatedRoute: ActivatedRoute){}
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        let id = params['id'];
      
        console.log(`${id}`);
        });
    }
}
