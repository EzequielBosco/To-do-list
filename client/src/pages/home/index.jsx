import CrudContainer from "../../components/crudContainer"
import TaskList from "../../components/taskList"
import Navbar from "../../layout/navbar"

const Home = () => {
  return (
    <>
    <Navbar />
      <main>
        <CrudContainer />
        <TaskList />
      </main>
    </>
  )
}

export { Home }