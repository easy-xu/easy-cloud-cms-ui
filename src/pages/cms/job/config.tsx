import { FC, useState } from 'react';
import CurdPage, { IFields } from '@/components/CurdPage';
import AuthEntityPage from '@/components/AuthEntityPage';
import { useRequest } from 'umi';
import { baseList } from '@/services/base';

const JobConfig: FC = (props: any) => {
  const fields: IFields = [
    {
      subPage: 'base',
      name: '任务名称',
      code: 'name',
      type: 'string',
      style: { search: { display: true } },
      rules: [{ required: true }, { type: 'string', max: 60 }],
    },
    {
      subPage: 'base',
      name: '周期表达式',
      code: 'cron',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ required: true }, { type: 'string', max: 60 }],
    },
    {
      subPage: 'base',
      name: '任务类名',
      code: 'beanName',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 60 }],
    },
    {
      subPage: 'base',
      name: '任务方法名',
      code: 'methodName',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 60 }],
    },
    {
      subPage: 'base',
      name: '任务参数',
      code: 'params',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 500 }],
    },
    {
      subPage: 'base',
      name: '最后触发时间',
      code: 'lastTrigger',
      type: 'datetime',
      style: { search: { display: false } },
    },
  ];

  return (
    <AuthEntityPage
      model="job"
      entity="config"
      pageTitle="任务页面"
      fields={fields}
      option={['add', 'edit', 'delete']}
    />
  );
};
// @ts-ignore
JobConfig.title = '任务页面';
export default JobConfig;
