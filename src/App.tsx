import { Header } from 'components/Header'
import { Main } from 'components/Main'
import GlobalStyle from 'resources/styles/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useTheme } from 'hooks/useTheme'

import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { ClassesList } from './pages/Classes'
import { Curriculum } from './pages/Curriculum'
import { SubjectsList } from './pages/Subjects'
import { TeachersList } from './pages/Teachers'
import { Timesheets } from './pages/Timesheets'
/* import { UsersList, UsersInsert, UsersEdit } from './pages/Users/index---' */
import TeachersEdit from './pages/Teachers/teachers-edit'
import SubjectsEdit from './pages/Subjects/subjects-edit'
import ClassesEdit from './pages/Classes/classes-edit'
import * as Pages from './pages'

import light from 'resources/styles/themes/light'
import dark from 'resources/styles/themes/dark'

function App() {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/usuarios" element={<Pages.UsersList />} />
            <Route path="/usuario/e/:id" element={<Pages.UsersEdit />} />
            <Route path="/usuario/novo" element={<Pages.UsersInsert />} />
            <Route path="/professores" element={<TeachersList />} />
            <Route path="/professor/e/:id" element={<TeachersEdit />} />
            <Route path="/turmas" element={<ClassesList />} />
            <Route path="/turma/e/:id" element={<ClassesEdit />} />
            <Route path="/disciplinas" element={<SubjectsList />} />
            <Route path="/disciplina/e/:id" element={<SubjectsEdit />} />
            <Route path="/matriz-curricular" element={<Curriculum />} />
            <Route path="/quadro-horario" element={<Timesheets />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </ThemeProvider>
  )
}

export { App }
