import { FC, useState } from 'react';
import CurdPage, { IFields } from '@/components/CurdPage';
import AuthEntityPage from '@/components/AuthEntityPage';
import { useRequest } from 'umi';
import { baseList, baseTree } from '@/services/base';
import { toTreeData, toListData } from '@/utils/baseUtil';
import { jobRun, jobStart, jobStop } from '@/services/job';

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
      name: '任务参数',
      code: 'params',
      type: 'textarea',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 500 }],
    },
    {
      name: '执行状态',
      code: ['trigger', 'state'],
      type: 'select',
      //NONE, NORMAL, PAUSED, COMPLETE, ERROR, BLOCKED
      select: [
        { code: 'NONE', name: '停止', color: 'gray' },
        { code: 'NORMAL', name: '正常', color: 'green' },
        { code: 'PAUSED', name: '暂停', color: 'yellow' },
        { code: 'COMPLETE', name: '完成', color: 'green' },
        { code: 'ERROR', name: '错误', color: 'red' },
        { code: 'BLOCKED', name: '等待', color: 'yellow' },
      ],
      style: {
        search: { display: false },
        add: { display: false },
        edit: { display: false },
      },
    },
    {
      name: '最后触发时间',
      code: ['trigger', 'previousFireTime'],
      type: 'datetime',
      style: {
        search: { display: false },
        add: { display: false },
        edit: { display: false },
      },
    },
    {
      name: '下次触发时间',
      code: ['trigger', 'nextFireTime'],
      type: 'datetime',
      style: {
        search: { display: false },
        add: { display: false },
        edit: { display: false },
      },
    },
  ];

  const jobRunRequest = useRequest((id: number) => jobRun({ id: id }), {
    manual: true,
  });

  const jobRunClick = (values?: any) => {
    jobRunRequest.run(values.id);
  };
  const jobStartRequest = useRequest((id: number) => jobStart({ id: id }), {
    manual: true,
  });

  const jobStartClick = (values?: any) => {
    jobStartRequest.run(values.id);
  };
  const jobStopRequest = useRequest((id: number) => jobStop({ id: id }), {
    manual: true,
  });

  const jobStopClick = (values?: any) => {
    jobStopRequest.run(values.id);
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
        {
          key: 'start',
          name: '开始',
          requireAuth: 'edit',
          onClick: jobStartClick,
        },
        {
          key: 'stop',
          name: '停止',
          requireAuth: 'edit',
          onClick: jobStopClick,
        },
      ]}
    />
  );
};
// @ts-ignore
JobConfig.title = '任务页面';
export default JobConfig;
