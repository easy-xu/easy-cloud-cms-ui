import { FC, useState } from 'react';
import CurdPage, { IFields } from '@/components/CurdPage';
import BaseEntityPage from '@/components/BaseEntityPage';
import { useRequest } from 'umi';
import { baseList } from '@/services/base';

const JobLog: FC = (props: any) => {
  const [jobIds, setJobIds] = useState<any>([]);
  const jobIdsRequest = useRequest(() => baseList('job', 'config', {}), {
    onSuccess: (data) => {
      let jobIds = data.map((item: any) => {
        return { code: item.id, name: item.name };
      });
      setJobIds(jobIds);
    },
  });

  const fields: IFields = [
    {
      subPage: 'base',
      name: '任务',
      code: 'jobId',
      type: 'select',
      select: jobIds,
      style: { search: { display: true } },
      rules: [{ required: true }],
    },
    {
      subPage: 'base',
      name: '日志分类',
      code: 'type',
      type: 'select',
      initial: '',
      select: [
        { code: 'S', name: '系统' },
        { code: 'U', name: '用户' },
      ],
      style: { search: { display: false } },
    },
    {
      subPage: 'base',
      name: '执行时间',
      code: 'execTime',
      type: 'datetime',
      style: { search: { display: false } },
    },
    {
      subPage: 'base',
      name: '执行结果',
      code: 'execCode',
      type: 'select',
      initial: '0',
      select: [
        { code: '0', name: '正常' },
        { code: '1', name: '异常' },
      ],
      style: { search: { display: false } },
    },
    {
      subPage: 'base',
      name: '执行结果描述',
      code: 'execContent',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 65535 }],
    },
  ];

  return (
    <BaseEntityPage
      model="job"
      entity="log"
      pageTitle="任务日志页面"
      fields={fields}
      option={[]}
    />
  );
};
// @ts-ignore
JobLog.title = '任务日志页面';
export default JobLog;
