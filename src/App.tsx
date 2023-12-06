import { useState } from "react";
import { ButtonAdd, CardTask, Container, ContainerCards, ContainerInput, ContainerTasks, Input, LabelTask, Title } from "./styles";
import { FaRegTrashCan } from "react-icons/fa6";

function App() {
  const [list, setList] = useState<{ id: number; task: string; }[]>([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0)

  function addTask(){
    console.log(Object.keys(list))
    const newTask = {
      id,
      task
    }
    setList(prevObject => [
        ...prevObject, newTask
    ])
    setTask("")
    setId(id + 1)
  }

  function removeTask(id: number){
    setList(prevList => prevList.filter(object => object.id !== id));
  }

  function handleKeyPress(e: any){
    if (e.key === 'Enter') {
      addTask();
    }
  }

  return (
    <Container>
      <Title>Tarefas</Title>

      <ContainerTasks>
        <ContainerInput>
          <Input placeholder="Escreva uma tarefa" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleKeyPress}/>
          <ButtonAdd onClick={addTask}>+</ButtonAdd>
        </ContainerInput>

        <ContainerCards>
          {
            list?.map((task) => {
              return(
                <CardTask>
                  <LabelTask>{task.task}</LabelTask>
                  <FaRegTrashCan onClick={() => removeTask(task.id)} size={24}/>
                </CardTask>
              )
            })
          }
        </ContainerCards>
      </ContainerTasks>
    </Container>
  )
}

export default App
