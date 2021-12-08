import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { ClassesList } from './pages/Classes'
import { Curriculum } from './pages/Curriculum'
import { SubjectsList } from './pages/Subjects'
import { TeachersList } from './pages/Teachers'
import { Timesheets } from './pages/Timesheets'
import TeachersEdit from './pages/Teachers/teachers-edit'
import SubjectsEdit from './pages/Subjects/subjects-edit'
import ClassesEdit from './pages/Classes/classes-edit'
import { ProtectedLayout } from 'components/ProtectedLayout'
import * as Pages from './pages'

function Routes() {
  return (
    <Router>
      <ProtectedLayout>
        <Route path="/" element={<Dashboard />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/usuarios" element={<Pages.UsersList />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/usuario/e/:id" element={<Pages.UsersEdit />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/usuario/novo" element={<Pages.UsersInsert />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/professores" element={<TeachersList />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/professor/e/:id" element={<TeachersEdit />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/turmas" element={<ClassesList />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/turma/e/:id" element={<ClassesEdit />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/disciplinas" element={<SubjectsList />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/disciplina/e/:id" element={<SubjectsEdit />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/matriz-curricular" element={<Curriculum />} />
      </ProtectedLayout>
      <ProtectedLayout>
        <Route path="/quadro-horario" element={<Timesheets />} />
      </ProtectedLayout>

      <Route path="/login" element={<Login />} />
    </Router>
  )
}

export default Routes
