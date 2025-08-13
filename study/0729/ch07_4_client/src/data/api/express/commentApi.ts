import {get, del} from '../../server/getAndDel'
import {post, put} from '../../server/postAndPut'

export function Comment() {
  function getComment(jwt: string) {
    get('/comment/1234', jwt)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }

  function addUser(jwt: string) {
    post('/test', D.makeRandomCard())
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }

  function updateUser(jwt: string) {
    put('/test', D.makeRandomCard())
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }

  function deleteUser(jwt: string) {
    del('/test', jwt)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }
}
