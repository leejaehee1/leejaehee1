import {useMemo} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'

// todo
export default function Board() {
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="flex flex-wrap p-2 mt-4">
        <CreateListForm onCreateList={() => {}} />
      </div>
    </section>
  )
}
