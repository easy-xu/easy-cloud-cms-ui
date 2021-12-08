import { postRequest } from '@/utils/api';

//新增接口
export function baseSaveEntity(model: string, entity: string, params: any) {
  return postRequest(`/${model}/${entity}/save`, params);
}

//分页查询接口
export function basePageList(
  model: string,
  entity: string,
  page: any,
  query: any,
) {
  return postRequest(`/${model}/${entity}/page-list`, {
    page: page,
    query: query,
  });
}
//列表查询接口
export function baseList(model: string, entity: string, query: any) {
  return postRequest(`/${model}/${entity}/list`, query);
}
//主键查询接口
export function baseGetEntity(model: string, entity: string, id: number) {
  return postRequest(`/${model}/${entity}/get`, { id: id });
}
//查询接口
export function baseQueryEntity(model: string, entity: string, id: number) {
  return postRequest(`/${model}/${entity}/query`, { id: id });
}
//删除接口
export function baseDeleteEntity(model: string, entity: string, id: number) {
  return postRequest(`/${model}/${entity}/delete`, { id: id });
}
