import { request, instance } from '@/utils/request'

export function getLogin (form) {
  let res = request('/login', 'POST', form)
  return res
}

export function getUser (token) {
  let res = request('/user', 'GET', token)
  return res
}

export function getList () {
  let res = request('/list', 'GET')
  return res
}

export async function getPicture ({key, page}) {
  let url = 'http://api.toutiaojk.com/e/extend/jkh/picsearch'
  let res = await instance.get(url, { params: {key, page} })
  return res.data
}
