import { FC, useState } from 'react';
import CurdPage, { IFields } from '@/components/CurdPage';
import AuthEntityPage from '@/components/AuthEntityPage';
import { useRequest } from 'umi';
import { baseList } from '@/services/base';

const CmsGroup: FC = (props: any) => {
  const fields: IFields = [
    {
      subPage: 'base',
      name: '分组名称',
      code: 'name',
      type: 'string',
      style: { search: { display: true } },
      rules: [{ required: true }, { type: 'string', max: 30 }],
    },
    {
      subPage: 'base',
      name: '分组字符串',
      code: 'code',
      type: 'string',
      style: { search: { display: true } },
      rules: [{ required: true }, { type: 'string', max: 100 }],
    },
    {
      subPage: 'base',
      name: '备注',
      code: 'remark',
      type: 'string',
      style: { search: { display: false }, table: { display: false } },
      rules: [{ type: 'string', max: 500 }],
    },
  ];

  return (
    <AuthEntityPage
      model="cms"
      entity="group"
      pageTitle="分组页面"
      fields={fields}
      option={['add', 'edit', 'delete']}
    />
  );
};
// @ts-ignore
CmsGroup.title = '分组页面';
export default CmsGroup;
