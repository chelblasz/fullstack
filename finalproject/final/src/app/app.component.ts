import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Build Chore Cards';

  public TodoCtrl($scope) {
  
    $scope.todos = [
      {text:'Learn AngularJS', done:false},         
      {text: 'Build an app', done:false}
    ];
    
    $scope.getTotalTodos = function () {
      return $scope.todos.length;
    };
    
    
    $scope.addTodo = function () {
      $scope.todos.push({text:$scope.formTodoText, done:false});
      $scope.formTodoText = '';
    };
    
      $scope.clearCompleted = function () {
          $scope.todos = _.filter($scope.todos, function(todo){
              return !todo.done;
          });
      };
  }
  
}

// public card = 0;
  // public cards: Array<number> = [];

  // public create() {
  //   this.cards.push(this.card);
  // }