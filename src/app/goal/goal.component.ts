import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';
export class GoalComponent implements OnInit {

  goToUrl(id){
    this.router.navigate(['/goals',id])
  }

  deleteGoal(index){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
        }
      }
    }

    constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit() {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
//     interface ApiResponse{
//      author:string;
//      quote:string;
//   }
//   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
//        // Succesful API request
//        this.quote = new Quote(data.author, data.quote)
//      })
//   }
// }
