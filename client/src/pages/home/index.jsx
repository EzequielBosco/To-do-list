import { useState } from "react"
import CrudContainer from "../../components/crudContainer"
import TaskList from "../../components/taskList"
import Navbar from "../../layout/navbar"

const Home = () => {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (results) => {
    setSearchResults(results)
  }

  return (
    <>
    <Navbar onSearch={handleSearch}/>
      <main>
        <CrudContainer />
        <TaskList searchResults={searchResults}/>
      </main>
    </>
  )
}

export { Home }