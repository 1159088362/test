import { get } from '@/utils/request'
import api from '@/services/api'
export function getDate (options) {
  return {
    type:"SEARCH",
    payload:get(`/aps${api.search}?keyword=`+options)
  }
}