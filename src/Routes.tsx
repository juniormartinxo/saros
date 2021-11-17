import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Classes } from './pages/Classes'
import { Curriculum } from './pages/Curriculum'
import { SubjectsList } from './pages/Subjects'
import { TeachersList } from './pages/Teachers'
import { Timesheets } from './pages/Timesheets'
import { UsersList } from './pages/Users'
import UsersEdit from './pages/Users/users-edit'
import TeachersEdit from './pages/Teachers/teachers-edit'
import SubjectsEdit from './pages/Subjects/subjects-edit'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/usuarios" exact component={UsersList} />
        <Route path="/usuario/e/:id" exact component={UsersEdit} />
        <Route path="/professores" exact component={TeachersList} />
        <Route path="/professor/e/:id" exact component={TeachersEdit} />
        <Route path="/turmas" exact component={Classes} />
        <Route path="/disciplinas" exact component={SubjectsList} />
        <Route path="/disciplina/e/:id" exact component={SubjectsEdit} />
        <Route path="/matriz-curricular" exact component={Curriculum} />
        <Route path="/quadro-horario" exact component={Timesheets} />
      </Switch>
    </Router>
  )
}

export default Routes
