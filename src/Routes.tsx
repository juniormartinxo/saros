import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Classes } from './pages/Classes'
import { Curriculum } from './pages/Curriculum'
import { Subjects } from './pages/Subjects'
import { Teachers } from './pages/Teachers'
import { Timesheets } from './pages/Timesheets'
import { UsersList } from './pages/Users'
import UsersEdit from './pages/Users/users-edit'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/usuarios" exact component={UsersList} />
        <Route path="/usuarios/e/:userId" exact component={UsersEdit} />
        <Route path="/professores" exact component={Teachers} />
        <Route path="/turmas" exact component={Classes} />
        <Route path="/disciplinas" exact component={Subjects} />
        <Route path="/matriz-curricular" exact component={Curriculum} />
        <Route path="/quadro-horario" exact component={Timesheets} />
      </Switch>
    </Router>
  )
}

export default Routes
