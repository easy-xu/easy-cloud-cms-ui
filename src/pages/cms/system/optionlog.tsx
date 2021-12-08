import { FC, useState } from 'react';
import CurdPage, { IFields } from '@/components/CurdPage';
import BaseEntityPage from '@/components/BaseEntityPage';
import { useRequest } from 'umi';
import { baseList } from '@/services/base';

const SysOptionLog: FC = (props: any) => {
  const fields: IFields = [
    {
      subPage: 'base',
      name: '用户编号',
      code: 'userNo',
      type: 'string',
      style: { search: { display: true } },
      rules: [{ type: 'string', max: 60 }],
    },
    {
      subPage: 'base',
      name: '设备编号',
      code: 'deviceNo',
      type: 'string',
      style: { search: { display: true } },
      rules: [{ type: 'string', max: 60 }],
    },
    {
      subPage: 'base',
      name: '操作名称',
      code: 'optionName',
      type: 'string',
      style: { search: { display: false } },
      rules: [{ type: 'string', max: 60 }],
    },
  ];

  return (
    <BaseEntityPage
      model="sys"
      entity="optionlog"
      pageTitle="操作记录页面"
      fields={fields}
      option={[]}
    />
  );
};
// @ts-ignore
SysOptionLog.title = '操作记录页面';
export default SysOptionLog;
