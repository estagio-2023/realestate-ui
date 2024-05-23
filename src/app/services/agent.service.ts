import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgentModel } from '../models/agent-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  baseUrl = "http://localhost:5152/";
  
  constructor(private httpClient: HttpClient) { }

  getAllAgentData(): Observable<AgentModel[]> {
    return this.httpClient.get<AgentModel[]>(this.baseUrl + 'Agent');
  }

  getAgentById(agentId: number): Observable<AgentModel>{
    return this.httpClient.get<AgentModel>(this.baseUrl + "Agent/" + agentId)
  }

  addAgentData(agent: any) {
    return this.httpClient.post<AgentModel>(this.baseUrl + 'Agent/', agent, this.httpOptions);
  }

  deleteAgent(agentId: number) {
    return this.httpClient.delete(this.baseUrl + "Agent/" + agentId)
  }

  editAgent(agentId: number, updatedData: any){
    return this.httpClient.put(this.baseUrl + "Agent/" + agentId, updatedData);
  }
}
