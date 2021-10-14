import { FC, useState } from 'react';
import CmsCurd, { IFields } from '@/components/CmsCurd';
import { cmsList, cmsMenuTree } from '@/services/cms';
import { useRequest } from 'umi';
import { Tree } from 'antd';

const Role: FC = (props: any) => {
  const [menuTreeData, setMenuTreeData] = useState([]);
  const [menutreeDisable, setMenuTreeDisable] = useState<boolean>(false);

  const [checkedMenuKeys, setCheckedMenuKeys] = useState<React.Key[]>([]);

  const menuTreeRequest = useRequest(() => cmsMenuTree({}), {
    onSuccess: (data) => {
      setMenuTreeData(convertToTreeData(data));
    },
  });

  const convertToTreeData = (menus: any) => {
    console.log(menus);
    return menus?.map((menu: any) => {
      let children = convertToTreeData(menu.children);
      return {
        key: menu.id,
        title: menu.name,
        children: children,
      };
    });
  };

  const onMenuTreeCheck = (checkedKeysValue: any) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedMenuKeys(checkedKeysValue.checked);
  };
  const menuTreeClear = () => {
    setCheckedMenuKeys([]);
  };

  const fields: IFields = [
    {
      name: '主键',
      code: 'id',
      type: 'number',
      style: {
        search: { display: false },
        table: { display: false },
        add: { hidden: true },
        edit: { hidden: true },
      },
    },

    {
      name: '角色名称',
      code: 'name',
      type: 'string',
    },
    {
      name: '角色字符',
      code: 'code',
      type: 'string',
      style: {
        search: { display: false },
      },
    },
    {
      name: '角色菜单',
      code: 'menuIds',
      type: 'tree',
      style: {
        search: { display: false },
        table: { display: false },
      },
      node: (
        <Tree
          disabled={menutreeDisable}
          checkable
          checkStrictly
          onCheck={onMenuTreeCheck}
          checkedKeys={checkedMenuKeys}
          treeData={menuTreeData}
        />
      ),
    },
    {
      name: '状态',
      code: 'status',
      type: 'select',
      select: [
        { code: '0', name: '启用', color: 'green' },
        { code: '1', name: '停用', color: 'red' },
      ],
    },
  ];

  return (
    <CmsCurd
      model="role"
      name="角色"
      fields={fields}
      extendData={[
        {
          key: 'menuIds',
          data: checkedMenuKeys,
          setDisable: setMenuTreeDisable,
          setData: setCheckedMenuKeys,
          clear: menuTreeClear,
        },
      ]}
    />
  );
};
// @ts-ignore
Role.title = '角色页面';
export default Role;
