import { Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login'
import * as Pages from './pages'

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Dashboard />} />
      <Route path="/usuarios" element={<Pages.UsersList />} />
      <Route path="/usuario/e/:id" element={<Pages.UsersEdit />} />
      <Route path="/usuario/novo" element={<Pages.UsersInsert />} />
      <Route path="/professores" element={<Pages.TeachersList />} />
      <Route path="/professor/e/:id" element={<Pages.TeachersEdit />} />
      <Route path="/turmas" element={<Pages.ClassesList />} />
      <Route path="/turma/e/:id" element={<Pages.ClassesEdit />} />
      <Route path="/disciplinas" element={<Pages.SubjectsList />} />
      <Route path="/disciplina/e/:id" element={<Pages.SubjectsEdit />} />
      <Route path="/matriz-curricular" element={<Pages.Curriculum />} />
      <Route path="/quadro-horario" element={<Pages.Timesheets />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default RoutesApp
