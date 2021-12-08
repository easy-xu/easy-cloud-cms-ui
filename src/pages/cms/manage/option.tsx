import { FC, useState } from 'react';
import CurdPage, { IFields } from '@/components/CurdPage';
import AuthEntityPage from '@/components/AuthEntityPage';
import { useRequest } from 'umi';
import { baseList } from '@/services/base';

const CmsOption: FC = (props: any) => {
  const fields: IFields = [
    {
      subPage: 'base',
      name: '操作名称',
      code: 'name',
      type: 'string',
      style: { search: { display: true } },
      rules: [{ required: true }, { type: 'string', max: 50 }],
    },
    {
      subPage: 'base',
      name: '操作字符串',
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
      entity="option"
      pageTitle="操作类型页面"
      fields={fields}
      option={['add', 'edit', 'delete']}
    />
  );
};
// @ts-ignore
CmsOption.title = '操作类型页面';
export default CmsOption;
