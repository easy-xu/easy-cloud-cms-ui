import { FC, useState } from 'react';
import CurdPage, { IFields } from '@/components/CurdPage';
import AuthEntityPage from '@/components/AuthEntityPage';
import { useRequest } from 'umi';
import { baseList, baseTree } from '@/services/base';
import { toTreeData, toListData } from '@/utils/baseUtil';
import { jobRun } from '@/services/job';

const JobConfig: FC = (props: any) => {
  const fields: IFields = [
    {
      name: '任务名称',
      code: 'name',
      type: 'string',
      style: { search: { display: true } },
      rules: [{ required: true }, { type: 'string', max: 60 }],
    },
    {
      name: '周期表达式',
      code: 'cron',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ required: true }, { type: 'string', max: 60 }],
    },
    {
      name: '任务类名',
      code: 'beanName',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 60 }],
    },
    {
      name: '任务方法名',
      code: 'methodName',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 60 }],
    },
    {
      name: '任务参数',
      code: 'params',
      type: 'textarea',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 500 }],
    },
    {
      name: '最后触发时间',
      code: 'lastTrigger',
      type: 'datetime',
      style: { search: { display: false } },
    },
  ];

  const jobRunRequest = useRequest((params) => jobRun(params), {
    manual: true,
    onSuccess: (data) => {},
  });

  const jobRunClick = (values?: any) => {
    jobRunRequest.run({ id: values.id });
  };

  return (
    <AuthEntityPage
      model="job"
      entity="config"
      pageTitle="任务页面"
      fields={fields}
      option={['add', 'edit', 'delete']}
      extendOption={[
        {
          key: 'run',
          name: '执行',
          requireAuth: 'edit',
          onClick: jobRunClick,
        },
      ]}
    />
  );
};
// @ts-ignore
JobConfig.title = '任务页面';
export default JobConfig;
