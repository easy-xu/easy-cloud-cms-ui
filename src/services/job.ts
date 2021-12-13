import { postRequest } from '@/utils/api';

//执行任务
export function jobRun(params: any) {
  return postRequest(`/job/run`, params);
}
//开始任务
export function jobStart(params: any) {
  return postRequest(`/job/start`, params);
}
//停止任务
export function jobStop(params: any) {
  return postRequest(`/job/stop`, params);
}
