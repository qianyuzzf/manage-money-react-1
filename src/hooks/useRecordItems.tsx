import {useEffect, useState} from 'react';
import {RecordItems} from '../types/Types';
import {useUpdate} from './useUpdate';

function useRecordItems() {
  const [recordItems, setRecordItems] = useState<RecordItems[]>([]);
  useEffect(() => {
    setRecordItems(JSON.parse(window.localStorage.getItem('recordItems') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('recordItems', JSON.stringify(recordItems));
  }, [recordItems]);
  const addRecord = (record: RecordItems) => {
    const bool = window.confirm('你确定要保存吗');
    if (bool) {
      if (record.tags.length === 0) {
        window.alert('请至少选择一个标签名');
        return false;
      } else if (record.amount === '') {
        window.alert('金额不能为空');
        return false;
      } else if (parseFloat(record.amount) <= 0) {
        window.alert('金额不能小于或等于零');
        return false;
      } else {
        setRecordItems([...recordItems, {...record, createAt: (new Date()).toISOString()}]);
        window.alert('保存成功');
        return true;
      }
    }
  };
  return {recordItems, setRecordItems, addRecord};
}

export {useRecordItems};