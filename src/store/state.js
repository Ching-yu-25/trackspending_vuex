export default {
  //支出紀錄列表
  monthList: [{
    id: 1,
    date: '2021-09-28',
    name: '生日套組',
    type: '5',
    text: 'まゆ生日快樂!',
    cost: 3000,
  }, {
    id: 2,
    date: '2021-10-10',
    name: '手機費',
    type: '1',
    text: '',
    cost: 199,
  }, {
    id: 3,
    date: '2021-10-14',
    name: '午餐',
    type: '2',
    text: '魷魚羹麵',
    cost: 55,
  }, {
    id: 4,
    date: '2021-10-14',
    name: '火車',
    type: '3',
    text: '【自強號】中壢-嘉義',
    cost: 510,
  }, {
    id: 5,
    date: '2021-10-21',
    name: '晚餐',
    type: '2',
    text: '豬排套餐',
    cost: 150,
  }, {
    id: 6,
    date: '2021-10-22',
    name: '專輯',
    type: '5',
    text: 'knights Album',
    cost: 1000,
  }, {
    id: 7,
    date: '2021-11-01',
    name: '手機費',
    type: '1',
    text: '',
    cost: 218,
  }, {
    id: 8,
    date: '2021-11-02',
    name: 'live ticket',
    type: '5',
    text: 'nijirock',
    cost: 1200,
  }],

  //類別列表
  typeList: [{
    id: '1',
    name: '電信',
    color: 'bg-blue',
  }, {
    id: '2',
    name: '食物',
    color: 'bg-red'
  }, {
    id: '3',
    name: '交通',
    color: 'bg-yel'
  }, {
    id: '4',
    name: '日用品',
    color: 'bg-grn',
  }, {
    id: '5',
    name: '娛樂',
    color: 'bg-pink'
  }, {
    id: '6',
    name: '其他',
    color: 'bg-gray',
  }],

  //預算計畫
  plans: [{
    id: '1',
    date: '2021-04',
    income: '30000',
    list: [10000, 0, 1000, 5000],
  }, {
    id: '2',
    date: '2021-05',
    income: '30000',
    list: [10000, 0, 0, 5000],
  }, ],
}