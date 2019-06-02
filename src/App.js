import React from 'react';
import './App.css';
import FormTask from './components/FormTask';
import ControlTask from './components/ControlTask';
import ListTask from './components/ListTask';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [

      ]
    }
  }

  componentDidMount = () => {
    if(localStorage && localStorage.getItem('tasks'))
    {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks:tasks
      })
    }
  }
  
  onClickGenerateData = () => {
    var tasks = [
      {
        id: this.randomId(),
        name: "Học ReactJS",
        status: true
      },
      {
        id: this.randomId(),
        name: "Học Devepress XAF",
        status: true
      },
      {
        id: this.randomId(),
        name: "Học Ielts, Toeic để đi làm",
        status: false
      }
    ]

    this.setState({
      tasks: tasks
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  render() {
    const {tasks} = this.state; // const taks = this.state.tasks

    return (
      <div className="container" >
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <FormTask></FormTask>

          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
            <button type="button" className="btn btn-primary mr-15">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                  </button>
            <button type="button" className="btn btn-primary" onClick={this.onClickGenerateData}>
              <span className="fa fa-plus mr-5"></span>Tạo data
            </button>
            <ControlTask />

            <ListTask tasks={tasks}/>
            
          </div>
        </div>
      </div>
    );
  }

}

export default App;


