import { postRequest } from '@/utils/api';

//执行任务
export function jobRun(params: any) {
  return postRequest(`/job/run`, params);
}
