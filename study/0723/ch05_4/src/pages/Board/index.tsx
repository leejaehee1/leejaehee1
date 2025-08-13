import {useMemo, useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {DragDropContext} from 'react-beautiful-dnd'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'
import {useLists} from '../../store/useLists'
import BoardList from '../BoardList/'
import React from 'react'

export default function Board() {
  const [isDragging, setIsDragging] = useState(false)
  const {lists, onCreateList, onRemoveList, onMoveList} = useLists()

  const children = useMemo(
    () =>
      lists.map(list => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
          index={lists.findIndex(l => l.uuid === list.uuid)}
          onMoveList={onMoveList}
        />
      )),
    [lists, onRemoveList, onMoveList]
  )

  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="flex flex-wrap p-2 mt-4">
        {children}
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
