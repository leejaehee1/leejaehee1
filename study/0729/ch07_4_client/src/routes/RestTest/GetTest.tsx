import {useState, useCallback} from 'react'
import {get} from '../../data/server'
import {Button} from '../../theme/daisyui'
import {useAuth} from '../../contexts'

export default function GetTest() {
  const {jwt, loggedUser} = useAuth()
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const getAllTest = useCallback(() => {
    if (loggedUser === undefined) {
      get('/test')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setErrorMessage(error.message))
    } else {
      get('/test', jwt)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setErrorMessage(error.message))
    }
  }, [jwt, loggedUser])

  const getTest = useCallback(() => {
    if (loggedUser === undefined) {
      get('/test/1234')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setErrorMessage(error.message))
    } else {
      get('/test/1234', jwt)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setErrorMessage(error.message))
    }
  }, [jwt, loggedUser])

  return (
    <div className="mb-4">
      <div className="flex justify-center mb-4">
        <Button onClick={getAllTest} className="mr-12 bnt-primary">
          GET ALL
        </Button>
        <Button onClick={getTest} className="bnt-primary">
          GET ID 1234
        </Button>
      </div>
      <div className="mt-4 text-center">
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )
}
