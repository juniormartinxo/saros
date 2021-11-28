import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { ClassesList } from './pages/Classes'
import { Curriculum } from './pages/Curriculum'
import { SubjectsList } from './pages/Subjects'
import { TeachersList } from './pages/Teachers'
import { Timesheets } from './pages/Timesheets'
import { UsersList, UsersInsert } from './pages/Users'
import UsersEdit from './pages/Users/users-edit'
import TeachersEdit from './pages/Teachers/teachers-edit'
import SubjectsEdit from './pages/Subjects/subjects-edit'
import ClassesEdit from './pages/Classes/classes-edit'
import { ProtectedLayout } from 'components/ProtectedLayout'

function Routes() {
  return (
    <Router>
      <Switch>
        <ProtectedLayout>
          <Route path="/" exact component={Dashboard} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/usuarios" exact component={UsersList} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/usuario/e/:id" exact component={UsersEdit} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/usuario/novo" exact component={UsersInsert} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/professores" exact component={TeachersList} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/professor/e/:id" exact component={TeachersEdit} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/turmas" exact component={ClassesList} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/turma/e/:id" exact component={ClassesEdit} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/disciplinas" exact component={SubjectsList} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/disciplina/e/:id" exact component={SubjectsEdit} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/matriz-curricular" exact component={Curriculum} />
        </ProtectedLayout>
        <ProtectedLayout>
          <Route path="/quadro-horario" exact component={Timesheets} />
        </ProtectedLayout>

        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  )
}

export default Routes
