import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  public capabilities = [
    { title: '.Net Core', proficiency: 'proficient' },
    { title: 'Web API', proficiency: 'proficient' },
    { title: 'Graph DB', proficiency: 'beginner' },
    { title: 'Knowledge Graph', proficiency: 'intermediate' },
    { title: 'C#', proficiency: 'proficient' },
    { title: 'gRPC', proficiency: 'intermediate' },
    { title: 'MSSQL', proficiency: 'proficient' },
    { title: 'MongoDB', proficiency: 'intermediate' },
    { title: 'Dapper', proficiency: 'proficient' },
    { title: 'Microservices', proficiency: 'proficient' },    
    { title: 'RabbitMQ', proficiency: 'intermediate' },
    { title: 'Javascript', proficiency: 'proficient' },
    { title: 'Typescript', proficiency: 'proficient' },
    { title: 'Azure Functions', proficiency: 'intermediate' },
    { title: 'Angular', proficiency: 'proficient' },
    { title: 'ReactJS', proficiency: 'intermediate' },    
    { title: 'Azure Logic Apps', proficiency: 'intermediate' },
    { title: 'Azure AD B2C', proficiency: 'intermediate' },
    { title: 'Kubernetes', proficiency: 'beginner' },
    { title: 'Azure Service Bus', proficiency: 'intermediate' },
    { title: 'Docker', proficiency: 'intermediate' },    
    { title: 'git', proficiency: 'proficient' },
    { title: 'gitlab', proficiency: 'proficient' },
    { title: 'Azure DevOps', proficiency: 'proficient' }    
  ];
}
